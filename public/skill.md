# skill flowmind
以 Markdown 列表语法生成脑图, 仅读取第一块列表, 其余内容忽略
---

- 技能树:
  - 数学基础:
    - 微积分
    - 布尔代数
    - 线性代数
    - 概率统计
  - 计算机组成原理:
  - 计算机网络:
    - TCP/IP:
      - 理论七层模型
      - 实际模型:
        - 链路层 设备驱动程序及网络接口卡:
          - 以太网 IEEE 802
          - 环回接口
          - 最大传输单元 MTU
        - 网络层 IP, ICMP, IGMP:
          - IP 首部:
            - IPv4
            - IPv6
            - IP 路由选择
            - 子网寻址
          - ARP 地址解析协议 IP <--> MAC
          - RARP
          - 'ICMP: Internet 控制报文协议'
          - 'IGMP: Internet 组管理协议'
        - 传输层 TCP, UDP:
          - 'UDP: 用户数据报协议'
          - 'TCP: 传输控制协议':
            - 仅有两方进行彼此通信。广播和多播不能用于TCP
            - 数据报长度保持不变
            - TCP发出一个段后，启动定时器。不能确认目的端收到报文段将重发这个报文段
            - TCP收到TCP连接另一端的数据，将发送一个确认
            - 连接与关闭:
              - 建立连接，三次握手:
                - 'C: SYN <port> ISN'
                - 'S: SYN ISN ACK <CISN+1>'
                - 'C: ACK ISN+1'
                - 'SYN泛洪攻击, 客户端不执行第三步确认'
              - 连接终止, 四次挥手:
                - '原因: TCP半关闭'
                - 'C: FIN'
                - 'S: ACK+1'
                - 'S: FIN'
                - 'C: ACK + 1'
        - 应用层:
          - HTTP, Telnet, FTP, Email
    - HTTP:
    - HTTP2.0:
    - CDN:
    - WireShark:
    - P2P:
    - 隧道代理与普通代理:
    - 基于ServiceWork的前端反向代理:
    - 内网穿透:
  - 操作系统:
    - Aki
    - Bob
  - 数据结构与算法:
    - 中国
    - 美国
  - 设计模式:
  - 编程语言