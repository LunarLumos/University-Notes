# DYNAMIC ROUTING
---

Routers **share routes automatically**. No need to type every route by hand.

---

#  LABS

| Protocol | Guide | Packet Tracer File |
| -------- | ----- | ------------------ |
| RIP v1 | [rip_v1.md](Rip_V1/rip_v1.md) | [DYNAMIC_RIP_1.pkt](Rip_V1/DYNAMIC_RIP_1.pkt) |
| RIP v2 | [rip_v2.md](Rip_V2/rip_v2.md) | [RIP_2.pkt](Rip_V2/RIP_2.pkt) |
| EIGRP | [eigrp.md](EIGRP/eigrp.md) | [EIGRP.pkt](EIGRP/EIGRP.pkt) |
| OSPF | [ospf.md](OSPF/ospf.md) | [OSPF.pkt](OSPF/OSPF.pkt) |

---

#  COMPARISON

| Point | RIP v1 | RIP v2 | EIGRP | OSPF |
| ----- | ------ | ------ | ----- | ---- |
| Type | Distance Vector | Distance Vector | Hybrid | Link State |
| Metric | Hop count | Hop count | Bandwidth + Delay | Cost |
| Max hops | 15 | 15 | - | - |
| VLSM (classless) | No | Yes | Yes | Yes |
| Updates | Broadcast | Multicast | Multicast | Multicast |
| Convergence | Slow | Slow | Very fast | Fast |

---

#  ROUTE CODES (show ip route)

```
R = RIP
D = EIGRP
O = OSPF
C = Connected
S = Static
```

---

#  QUICK MEMORY

* RIP = **counts hops**
* EIGRP = **checks bandwidth + delay**
* OSPF = **maps the whole network**

---
