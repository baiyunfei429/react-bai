import React, { Component } from "react";
import { Button } from 'antd';
import './index.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodList: [
        {
          name: '苹果1',
          price: '201RMB',
          imgUrl: 'http://y3.ifengimg.com/dbcc8e45854c158f/2014/1005/ori_5430212dcee41.jpeg',
        },
        {
          name: '苹果2',
          price: '202RMB',
          imgUrl: 'http://y3.ifengimg.com/dbcc8e45854c158f/2014/1005/ori_543021322c7f4.jpeg',
        },
        {
          name: '苹果3',
          price: '203RMB',
          imgUrl: 'http://y3.ifengimg.com/dbcc8e45854c158f/2014/1005/ori_5430212dcee41.jpeg',
        },
        {
          name: '苹果4',
          price: '204RMB',
          imgUrl: 'http://y3.ifengimg.com/dbcc8e45854c158f/2014/1005/ori_5430211fba878.jpeg',
        },
        {
          name: '苹果5',
          price: '205RMB',
          imgUrl: 'http://y3.ifengimg.com/dbcc8e45854c158f/2014/1005/ori_543021322c7f4.jpeg',
        },
      ],
      listPaddingLeft: -7,
    };
    this.rollingInTheDeepToRight=this.rollingInTheDeepToRight.bind(this);
    this.rollingInTheDeepToLeft=this.rollingInTheDeepToLeft.bind(this);
  }
  rollingInTheDeepToRight() {
    const rollingUl = this.ul;
    let _prodList = this.state.prodList;
    const _lastProd = _prodList.pop();
    _prodList.unshift(_lastProd);
    console.log(_prodList);
    this.setState({
      listPaddingLeft: this.state.listPaddingLeft + 7,
      prodList: _prodList
    })
  }
  rollingInTheDeepToLeft() {
    const rollingUl = this.ul;
    let _prodList = this.state.prodList;
    const _lastProd = _prodList.shift();
    _prodList.push(_lastProd);
    console.log(_prodList);
    this.setState({
      listPaddingLeft: this.state.listPaddingLeft - 7,
      prodList: _prodList
    })
  }
  render() {
    const { prodList, listPaddingLeft } = this.state;
    const _length = prodList.length;
    return (
      <>
        <div className="wrapper">
          <ul 
            className='prodItemListWrap' 
            ref={(ul)=>{this.ul=ul}} 
            style={{fontSize: '10px', transition: 'all 0.3s', transform: `translateX(${this.state.listPaddingLeft}em)`}}
          >
            <li className='prodItemWrap'>
              <div className='prodItem'>
                <p className='prodText'>{prodList[_length-1].name}</p>
                <p className='prodText'><img src={prodList[_length-1].imgUrl} className='prodImg' alt=""/></p>
                <p className='prodText'>{prodList[_length-1].price}</p>
              </div>
            </li>
            {
              prodList && prodList.map((prod, idx) => {
                return (
                  <li className='prodItemWrap'  key={`prod-${idx}`}>
                    <div className='prodItem'>
                      <p className='prodText'>{prod.name}</p>
                      <p className='prodText'><img src={prod.imgUrl} className='prodImg' alt=""/></p>
                      <p className='prodText'>{prod.price}</p>
                    </div>
                  </li>
                )
              })
            }
            <li className='prodItemWrap'>
              <div className='prodItem'>
                <p className='prodText'>{prodList[0].name}</p>
                <p className='prodText'><img src={prodList[0].imgUrl} className='prodImg' alt=""/></p>
                <p className='prodText'>{prodList[0].price}</p>
              </div>
            </li>
          </ul>
        </div>
        <div style={{margin: '2em 0 0'}}>
          <Button type="primary" onClick={this.rollingInTheDeepToLeft}>向左滚动起来</Button>
          <Button type="primary" onClick={this.rollingInTheDeepToRight}>向右滚动起来</Button>
        </div>
      </>
    );
  }
}

export default Carousel;
