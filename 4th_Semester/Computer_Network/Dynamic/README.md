<div align="center">

# 🔄 Dynamic Routing

![RIP](https://img.shields.io/badge/RIP-v1%20%7C%20v2-orange?style=flat-square)
![EIGRP](https://img.shields.io/badge/EIGRP-Cisco-1BA0D7?style=flat-square)
![OSPF](https://img.shields.io/badge/OSPF-Link%20State-success?style=flat-square)

*Routers share their routes automatically, so there is no need to type every route by hand.*

</div>

---

## 📂 Labs

| Protocol | Type | Metric | Guide | Packet Tracer File |
| -------- | ---- | ------ | :---: | :----------------: |
| **RIP v1** | Distance Vector | Hop count (max 15) | [📖 Guide](Rip_V1/rip_v1.md) | [`DYNAMIC_RIP_1.pkt`](Rip_V1/DYNAMIC_RIP_1.pkt) |
| **RIP v2** | Distance Vector | Hop count (max 15) | [📖 Guide](Rip_V2/rip_v2.md) | [`RIP_2.pkt`](Rip_V2/RIP_2.pkt) |
| **EIGRP** | Advanced Distance Vector | Bandwidth + delay | [📖 Guide](EIGRP/eigrp.md) | [`EIGRP.pkt`](EIGRP/EIGRP.pkt) |
| **OSPF** | Link State | Cost (bandwidth) | [📖 Guide](OSPF/ospf.md) | [`OSPF.pkt`](OSPF/OSPF.pkt) |

---

## ⚡ Quick Comparison

| | RIP v1 | RIP v2 | EIGRP | OSPF |
| --- | :---: | :---: | :---: | :---: |
| Classless (VLSM) | ❌ | ✅ | ✅ | ✅ |
| Updates | Broadcast | Multicast | Multicast | Multicast |
| Speed of convergence | Slow | Slow | Very fast | Fast |
| Open standard | ✅ | ✅ | Cisco (now open) | ✅ |

> 💡 **Memory trick:** RIP *counts hops*, EIGRP *checks speed*, OSPF *maps the whole network*.

---

<div align="center">

[⬅️ Back to Computer Network](../README.md)

</div>
