import jQuery from "jquery";

export default class DataUtil{
  static CLSGRP_SUFFIX = "clsgrp_";
  static ATTRIBUTES_PATH = "/productEditor/attributes";
  static PRODUCT_PATH = "/productEditor/save";
  static attributesCache = [];

  constructor(contextPath){
    this.contextPath = contextPath;
  }

  findByKey = (key) => {
    let result = DataUtil.attributesCache.filter((v) => {return v.key === key});
    if(result.length !== 0) return result[0].list;
    return null;
  };

  updateAttributes(clsId, clsGrpId, callback){
    let key = clsId;
    if(clsGrpId) key = DataUtil.CLSGRP_SUFFIX + clsGrpId;
    let attributes = this.findByKey(key);
    if(!attributes){
      let params = {
        classificationId: clsId,
        classificationGroupId: clsGrpId
      };
      jQuery.getJSON(this.contextPath + DataUtil.ATTRIBUTES_PATH, params, (data) => {DataUtil.attributesCache.push({key: key, list: data});callback(data);})
    } else {
      callback(attributes)
    }
  };

  saveProduct(productString, mode, onSuccess, onError, onLoad){
    onLoad();
    jQuery.post(
      this.contextPath + DataUtil.PRODUCT_PATH,
      {productJSON: productString, mode: mode}
    ).done((params) => {onSuccess(params.errors)})
     .fail(onError);
  }
}
