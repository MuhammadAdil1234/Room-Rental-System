import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TableData = () => {
  var [tableHead, setTableHead] = useState([
    'Name',
    'CNIC',
    'contact',
    'Room ID',
  ]);

  var [tableData, setTableData] = useState([]);
  var array = tableData;
  var arr = [];
  const getData = async () => {
    try {
      var data = await AsyncStorage.getItem('user_room_book');
      tableData = JSON.parse(data);
      setTableData(tableData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={tableHead}
            flexArr={[1, 2, 1.5, 1]}
            style={[styles.head, styles.textt]}
            textStyle={styles.textt}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={tableData}
              flexArr={[1, 2, 1.5, 1]}
              style={[styles.row, styles.textt]}
              textStyle={styles.textt}
            />
          </TableWrapper>
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    paddingHorizontal: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(6),
  },
  head: {
    height: heightPercentageToDP(9),
    backgroundColor: '#C58BF2',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    backgroundColor: '#f6f8fa',
  },
  row: {
    height: heightPercentageToDP(6),
  },
  textt: {
    textAlign: 'center',
  },
});

export default TableData;
