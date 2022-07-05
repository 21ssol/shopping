package com.study.orders;

import java.util.List;
import java.util.Map;

public interface OrderService {

  void create(OrdersDTO dto) throws Exception;  //AOP로 할예정이기 때문에 예외처리해야함
  
  List<OrdersDTO> list(Map map);

  int total(Map map);

  int updateState(Map map);

}
