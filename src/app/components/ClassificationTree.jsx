import React from "react";
import {Button, Glyphicon} from "react-bootstrap";

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
            if(classificationGroup.classificationGroups) glyphicon = (<Glyphicon key={"g" + classificationGroup.classificationGroupId} glyph={classificationGroup.show ? "menu-down" : "menu-right"}/>);
            if(classificationGroup.classificationGroupId === self.props.product.classificationGroupId) className = className + " " + "list-group-item-info selected";
            return(
              <div key={"d" + classificationGroup.classificationGroupId}>
                <Button key={"b" + classificationGroup.classificationGroupId} className={className} style={style} onClick={() => {self.updateClassificationGroup(classificationGroup)}}>
                  {glyphicon}
                  {classificationGroup.description}
                </Button>
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
            if(classification.classificationGroups) glyphicon = (<Glyphicon key={"g" + classification.classificationId} glyph={classification.show ? "menu-down" : "menu-right"}/>);
            if(this.checkClassification(classification)) className = className + " " + "list-group-item-info selected";
            return(
              <div key={"d" + classification.classificationId}>
                <Button key={"b" + classification.classificationId} className={className} onClick={() => self.updateClassification(classification)}>
                  {glyphicon}
                  {classification.description}
                </Button>
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
    this.state = {classifications: props.classifications};
  }

  componentWillReceiveProps(nextProps){
    this.setState({classifications: nextProps.classifications});
  }

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
        clsGrp.show = false;
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
    this.updateClsAndClsGrp(classification.classificationId, "")
  };

  updateClassificationGroup = (clsGrp) => {
    let self = this;
    let {classifications} = this.state;
    classifications = classifications.map((classification) => {
      classification.classificationGroups = self.update(classification.classificationGroups, clsGrp);
      return classification;
    });
    this.setState({classifications: classifications});
    this.updateClsAndClsGrp(clsGrp.classificationId, clsGrp.classificationGroupId)
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
    this.props.updateClassificationId(clsId);
    this.props.updateClassificationGroupId(clsGrpId);
  };

  checkClassification = (cls) => {
    return cls.classificationId === this.props.product.classificationId && this.props.product.classificationGroupId === ""
  };

}