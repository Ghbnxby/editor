import React from "react";
import {Button, Glyphicon, ButtonGroup} from "react-bootstrap";
import DataUtil from "../services/DataUtil";

export default class ClassificationTree extends React.Component{

  renderNode = (classificationGroups, level) => {
    level = level + 1;
    let self = this;
    let style = {borderLeftWidth: (10 * level) + "px"};
    if(!classificationGroups || classificationGroups.length === 0) return null;
    return(
      <div className="list-unstyled">
        {
          classificationGroups.map((classificationGroup) => {
            let node;
            let glyphicon;
            let className = "list-group-item";
            if(classificationGroup.show) node = self.renderNode(classificationGroup.classificationGroups, level);
            if(classificationGroup.classificationGroups){
              glyphicon = (
                <Button onClick={() => {self.updateClassificationGroup(classificationGroup)}} style={{width: '10%'}}>
                  <Glyphicon key={"g" + classificationGroup.classificationGroupId} glyph={classificationGroup.show ? "menu-down" : "menu-right"}/>
                </Button>);
            }
            if(classificationGroup.classificationGroupId === self.props.product.classificationGroupId) className = className + " " + "list-group-item-info selected";
            return(
              <div key={"d" + classificationGroup.classificationGroupId}>
                <li key={"b" + classificationGroup.classificationGroupId} className={className} style={style}>
                  {glyphicon}
                  <Button onClick={() => {self.updateClsAndClsGrp(classificationGroup.classificationId, classificationGroup.classificationGroupId)}} style={{width: '90%'}}>
                    {classificationGroup.description}
                  </Button>
                </li>
                {node}
              </div>
            )
          })
        }
      </div>
    )
  };

  render(){
    let self = this;
    return(
      <div className="list-group">
        {
          this.state.classifications.map((classification) => {
            let node;
            let glyphicon;
            let className = "list-group-item";
            if(classification.show) node = self.renderNode(classification.classificationGroups, 0);
            if(classification.classificationGroups){
              glyphicon = (
                <Button  onClick={() => self.updateClassification(classification)} style={{width: '10%'}}>
                  <Glyphicon glyph={classification.show ? "menu-down" : "menu-right"}/>
                </Button>
              );
            }
            if(this.checkClassification(classification)) className = className + " " + "list-group-item-info selected";
            return(
              <div key={"d" + classification.classificationId}>
                <li className={className}>
                  {glyphicon}
                  <Button onClick={() => self.updateClsAndClsGrp(classification.classificationId, "")} style={{width: '90%'}}>
                    {classification.description}
                  </Button>
                </li>
                {node}
              </div>
            )
          })
        }
      </div>
    )
  };

  static propTypes = {
    classifications: React.PropTypes.array,
    product: React.PropTypes.object
  };

  constructor(props){
    super(props);
    this.state = {
      classifications: props.classifications,
      clsId: props.product.classificationId,
      clsGrpId: props.product.classificationGroupId
    };
    this.dataUtil = new DataUtil(props.contextPath);
    this.dataUtil.updateAttributes(props.product.classificationId, props.product.classificationGroupId, this.props.updateAttributes);
    this.show(props.show);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.show !== nextProps.show) this.show(nextProps.show);
    this.setState({classifications: nextProps.classifications});
    if(this.state.clsId !== nextProps.product.classificationId || this.state.clsGrpId !== nextProps.product.classificationGroupId) {
      this.setState({clsId: nextProps.product.classificationId, clsGrpId: nextProps.product.classificationGroupId});
      this.dataUtil.updateAttributes(nextProps.product.classificationId, nextProps.product.classificationGroupId, this.props.updateAttributes);
    }
  }

  show = (flag) => {
    if(flag) this.showAll();
    else this.closeAll();
  };

  closeAll = () => {
    this.updateAllClassifications(false);
  };

  showAll = () => {
    this.updateAllClassifications(true);
  };

  updateAllClassifications = (bool) => {
    let self = this;
    let {classifications} = this.state;
    classifications = classifications.map((classification) => {
      classification.show = bool;
      classification.classificationGroups = self.updateAll(classification.classificationGroups, bool);
      return classification
    });
    this.setState({classifications: classifications});
  };

  updateAll = (clsGrps, bool) => {
    let self = this;
    if(clsGrps) {
      return clsGrps.map((clsGrp) => {
        clsGrp.show = bool;
        clsGrp.classificationGroups = self.updateAll(clsGrp.classificationGroups, bool);
        return clsGrp;
      })
    }
  };

  updateClassification = (classification) => {
    let {classifications} = this.state;
    let index = classifications.indexOf(classification);
    classification.show = classification.show ? false : true;
    classifications[index] = classification;
    this.setState({classifications: classifications});
  };

  updateClassificationGroup = (clsGrp) => {
    let self = this;
    let {classifications} = this.state;
    classifications = classifications.map((classification) => {
      classification.classificationGroups = self.update(classification.classificationGroups, clsGrp);
      return classification;
    });
    this.setState({classifications: classifications});
  };

  update = (clsGrps, clsGrp) => {
    let self = this;
    if(clsGrps){
      return clsGrps.map((childClsGrp) => {
        if(JSON.stringify(childClsGrp) === JSON.stringify(clsGrp)) childClsGrp.show = childClsGrp.show ? false : true;
        childClsGrp.classificationGroups = self.update(childClsGrp.classificationGroups, clsGrp);
        return childClsGrp;
      })
    }
  };

  updateClsAndClsGrp = (clsId, clsGrpId) => {
    this.props.updateClsIdAndClsGrpId(clsId, clsGrpId);
  };

  checkClassification = (cls) => {
    return cls.classificationId === this.props.product.classificationId && this.props.product.classificationGroupId === ""
  };

}