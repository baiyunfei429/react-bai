import React, { Component } from "react";
import { Card } from 'antd';
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
      ]
    };
  }
  render() {
    const { prodList } = this.state;
    return (
      <div>
        <ul className='prodItemListWrap' style={{fontSize: '10px'}}>
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
        </ul>
      </div>
    );
  }
}

export default Carousel;
