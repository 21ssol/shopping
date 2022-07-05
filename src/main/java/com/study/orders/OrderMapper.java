package com.study.orders;

import java.util.List;
import java.util.Map;

public interface OrderMapper {
  
  int createOrder(OrdersDTO dto);  // orderno가 리턴되어지게끔 만들어야함
  
  void createDetail(OrderdetailDTO odto);  //orderDTO에도 인서트하는것
  
  List<OrdersDTO> list(Map map);
  
  int total(Map map);
  
  int updateState(Map map);
  
}
