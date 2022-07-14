'use strict';

angular.module('myApp.view11', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view11', {
    templateUrl: 'view11/view11.html',
    controller: 'View11Ctrl'
  });
}])

.controller('View11Ctrl', function($scope) {
     $scope.optionList = ['暂停一小时','暂停一天','暂停一周']
     $scope.windowsList = [
      // {class:'iconfont icon-shijian box',p1:'更新历史记录',p2:''},
      {class:'iconfont icon-fuzhushezhi box',p1:'高级设置',p2:'传递优化、可选更新、活跃时间以及其他更新设置'},
      {class:'iconfont icon-xiaomaochushou box',p1:'Windows预览体验计划',p2:'获取Windows的预览版本,以分享有关新功能和更新的反馈'},
     ]
     $scope.bottomList = [
       {class:'iconfont icon-31yiwen box',a:'获取帮助'},
       {class:'iconfont icon-kuaisufankuifankuiduihua box',a:'提供反馈'},
     ]
});