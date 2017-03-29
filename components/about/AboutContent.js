import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import config from '../../config/config.json'


class AboutContent extends Component{
  render(){
    return(
      <Card>
        <CardHeader
          title="个人资料"
        />
        <CardMedia>
          <img src={require("../../img/headportrait.jpg")} />
        </CardMedia>
        <CardTitle title="基本资料" />
        <CardText>
          <table>
            <tr><td width="196">昵称：</td><td width="147">heino</td></tr>
            <tr><td>性别：</td><td>男</td></tr>
            <tr><td>出生年份：</td><td>1996/08</td></tr>
            <tr><td>星座：</td> <td>狮子座</td></tr>
            <tr><td>婚姻状况：</td><td>未婚</td></tr>
            <tr><td>血型：</td><td>暂未填写</td></tr>
            <tr><td>故乡：</td><td>江西</td></tr>
            <tr><td>现居地：</td><td>南昌</td></tr>
            <tr><td>职业：</td><td>学生</td></tr>
            <tr><td>自我介绍：</td><td>我，是不会成为回忆的！</td></tr>
          </table>
          <hr/>
           <h2>兴趣爱好</h2>
           <hr/>
          <table>
            <tr><td width="196">明星：</td><td width="147">暂未填写</td></tr>
            <tr><td>食物：</td><td>暂未填写</td></tr>
            <tr><td>运动：</td><td>暂未填写</td></tr>
            <tr><td>音乐：</td><td>暂未填写</td></tr>
            <tr><td>影视：</td><td>暂未填写</td></tr>
            <tr><td>书籍：</td><td>暂未填写</td></tr>
          </table>
        </CardText>
      </Card>  
  )
}
}
export default AboutContent