// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Container } from '../../../../Components/UI/Layouts';
// import { ListItem, Icon, Overlay, SearchBar } from 'react-native-elements';
// import moment from "moment";
// import { View, Text, ActivityIndicator, StyleSheet, RefreshControl, ScrollView } from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import ActionButton from 'react-native-action-button';
// import {getPlayersDetails} from '../../QuizAction';

// function PlayersTable(props) {

//     useEffect(() => {
//         props.getCustomerListByUserId(props.userId);
//     }, []);

//     const [expanded, setexpanded] = useState(false);
//     function expandedList() {
//         setexpanded(!expanded);
//     };

//     const currentdate = moment().format("DD/MM/YYYY");

//     const navigate = props.navigation.navigate;

//     const wait = (timeout) => {
//         return new Promise(resolve => setTimeout(resolve, timeout));
//     }

//     const [refreshing, setRefreshing] = useState(false);
//     const onRefresh = useCallback(() => {
//         setRefreshing(true);
//         wait(3000).then(() => setRefreshing(false));
//         //  Call the Service to get the latest data
//         props.getCustomerListByUserId(props.userId);
//     }, []);

//     const [filterCustomerValue, setFilterCustomerValue] = useState("");
//     const filteredCustomer = useMemo(() => {
//         return filterCustomerValue === ""
//             ? props.customerByUserId
//             : props.customerByUserId.filter((customerByUserId) => {
//                 // debugger;
//                 return customerByUserId.name
//                     .toLowerCase()
//                     .includes(filterCustomerValue.toLowerCase());
//             });
//     }, [filterCustomerValue, props.customerByUserId]);
//     //console.log(filteredCustomer);

//     function loadCustomerData(textToSearch) {
//         setFilterCustomerValue(textToSearch);
//     };

//     // debugger;
//     const {
//         fetchingCustomers,
//         customerByUserId,
//         user,
//     } = props;
//     //console.log('inside customer list data', customerByUserId);

//     if (fetchingCustomers) {
//         return (
//             <View style={[styles.container, styles.horizontal]}>
//                 <ActivityIndicator size="large" color="#2e8dd1" />
//             </View>
//         );
//     }

//     return (
//         <>
//             <Container>
//                 <SearchBar
//                     round="true"
//                     // showLoading="true"
//                     lightTheme="true"
//                     placeholder="Search By Name"
//                     inputContainerStyle={{ backgroundColor: '#ffffff', height: '5%' }}
//                     containerStyle={{ width: '100%' }}
//                     onChangeText={text => { loadCustomerData(text); }}
//                     value={filterCustomerValue}
//                 />
//                 {filteredCustomer.length ? (
//                     <ScrollView
//                         refreshControl={
//                             <RefreshControl
//                                 refreshing={refreshing}
//                                 onRefresh={onRefresh}
//                             />
//                         }
//                     >
//                         <View>
//                             {filteredCustomer &&
//                                 filteredCustomer.length &&
//                                 filteredCustomer.map((l, i) => (
//                                     <ListItem.Accordion
//                                         key={i}
//                                         bottomDivider
//                                         content={
//                                             <>
//                                                 <ListItem.Content>
//                                                     {/* {l.creationDate === currentdate && <Text style={{color: 'red', fontWeight: 'bold'}}>New</Text>} */}
//                                                     {/* {l.creationDate === currentdate ? ( <Text style={{color: 'red', fontWeight: 'bold'}}>New</Text> ): null} */}
//                                                     <ListItem.Title style={styles.title}>{l.name || ""} {l.creationDate === currentdate ? <Text style={{ color: 'red' }}>New</Text> : null}</ListItem.Title>
//                                                     <ListItem.Subtitle>{l.url || ""}</ListItem.Subtitle>
//                                                 </ListItem.Content>

//                                                 <View style={{ marginRight: '2%' }}>
//                                                     <Icon
//                                                         name="info"
//                                                         size={22}
//                                                         color='#2e8dd1'
//                                                         onPress={() =>
//                                                             navigate('Customer Detail', {
//                                                                 customerId: l.customerId,
//                                                             })}
//                                                     />
//                                                 </View>
//                                             </>
//                                         }
//                                         isExpanded={expanded}
//                                         onPress={expandedList}
//                                     >
//                                         <ListItem key={i} bottomDivider>
//                                             <ListItem.Content>
//                                                 <ListItem.Title style={styles.title}>{`${l.email || ""}`}</ListItem.Title>
//                                                 <ListItem.Subtitle>{`${l.sector || ""} ${''} ${l.country || ""}`}</ListItem.Subtitle>
//                                             </ListItem.Content>
//                                             <ListItem.Chevron color="#2e8dd1" />
//                                         </ListItem>
//                                     </ListItem.Accordion>
//                                 ))
//                             }
//                         </View>
//                     </ScrollView>
//                 ) : (
//                     <View style={styles.nodata}>
//                         <Icon style={styles.icon} size={56} name="inbox" type="antdesign" />
//                         <Text
//                             style={{
//                                 color: 'black',
//                                 fontSize: 20,
//                                 borderBottomColor: '#2e8dd1',
//                                 textAlign: 'center',
//                             }}>
//                             We couldn't find relevant data
//                         </Text>
//                     </View>
//                 )}
//                 <ActionButton
//                     buttonColor="tomato"
//                     style={{ marginBottom: '13%' }}
//                     onPress={() => navigate('Add Customer')}
//                 />
//             </Container>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     icon: {
//         margin: 80,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: 'black',
//     },
//     nodata: {
//         flex: 1,
//         backgroundColor: 'white',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingLeft: 8,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     horizontal: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         padding: 10,
//     },
//     text: {
//         color: '#ffffff',
//         fontSize: 21,
//         textAlign: 'center',
//     },
// });

// const mapStateToProps = ({ quiz }) => ({
   
// })

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             getPlayersDetails
//         },
//         dispatch
//     );

// export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable);