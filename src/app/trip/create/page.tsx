'use client';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { Form, Button, Input, Upload } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

function TripCreatePage() {
  function handleFinish(values: any) {
    console.log({ values });
  }
  return (
    <Form name='trip' onFinish={handleFinish}>
      <h3>여행지를 입력해주세요</h3>
      <Form.Item name='triparea'>
        <Input
          placeholder='여행한 도시를 검색해주세요'
          addonAfter={<SearchOutlined />}
        />
      </Form.Item>
      <h3>총 경비를 입력해주세요</h3>
      <Form.Item name='amount'>
        <Input
          placeholder='비행기표, 숙소, 기타 비용을 모두 포함한 비용을 입력해주세요'
          addonAfter={'₩'}
        />
      </Form.Item>

      <h3>PDF를 등록해주세요</h3>
      <Form.Item name='file'>
        <>
          <Upload />
          <Button type='primary'>파일 업로드</Button>
        </>
      </Form.Item>

      <h3>추가 설명을 입력해주세요</h3>
      <Form.Item name='description'>
        <TextArea
          style={{ height: '200px', overflow: 'hidden' }}
          placeholder='특별한 내용이나, 재미있는 경험을 넣어주세요'
        />
      </Form.Item>

      <h3>판매 금액을 입력해주세요</h3>
      <Form.Item name='price'>
        <Input placeholder='500원부터' addonAfter={'₩'} />
      </Form.Item>
      <ul>
        <li>너무 높으면 판매되지 않아요</li>
        <li>금액은 다시 수정할 수 있어요</li>
      </ul>

      <Button
        htmlType='submit'
        type='primary'
        size='large'
        style={{ width: '100%', marginTop: '25px' }}
      >
        등록하기
      </Button>
    </Form>
  );
}

export default TripCreatePage;
