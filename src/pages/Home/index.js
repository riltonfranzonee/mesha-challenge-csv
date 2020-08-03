import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';

import { CloudUploadOutlined } from '@ant-design/icons';
import { Table } from 'antd';

import {
  Container,
  Content,
  IconDrop,
  TextDrop,
  ItemsContainer,
} from './styles';

import EmptyMessage from '../../components/Empty';

export default function Home() {
  const [items, setItems] = useState([]);
  const [columns, setColumns] = useState([]);

  const handleNewFile = data => {
    const formattedColumns = data[0].meta.fields.map(field => ({
      title: field,
      key: field,
      dataIndex: field,
    }));

    setColumns(formattedColumns);
    setItems(data.map(d => d.data));
  };

  const handleRemove = () => {
    setItems([]);
    setColumns([]);
  };

  return (
    <Container>
      <Content>
        <CSVReader
          onDrop={handleNewFile}
          style={{ dropArea: { maxHeight: 150, width: '100%' } }}
          config={{ header: true }}
          addRemoveButton
          onRemoveFile={handleRemove}
        >
          <IconDrop className="ant-upload-drag-icon">
            <CloudUploadOutlined />
          </IconDrop>
          <TextDrop className="ant-upload-text">
            Clique ou solte um arquivo CSV aqui
          </TextDrop>
        </CSVReader>
        <ItemsContainer>
          <Table
            columns={columns}
            dataSource={items}
            pagination={{ pageSize: 8 }}
            locale={{ emptyText: EmptyMessage }}
          />
        </ItemsContainer>
      </Content>
    </Container>
  );
}
