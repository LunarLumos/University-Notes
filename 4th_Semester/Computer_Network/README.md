<div align="center">

# 🖧 Computer Network Labs

![Cisco](https://img.shields.io/badge/Cisco-Packet%20Tracer-1BA0D7?style=for-the-badge&logo=cisco&logoColor=white)
![Routing](https://img.shields.io/badge/Routing-Static%20%7C%20Dynamic-success?style=for-the-badge)

*Ready-to-run Packet Tracer files with full router commands and step-by-step guides.*

</div>

---

## 🧪 Labs

| Type | Lab | Guide | Packet Tracer File |
| :--: | --- | :---: | :----------------: |
| 🔒 Static | Static Routing | [📖 Guide](Static/README.md) | [`STATIC_CLI.pkt`](Static/STATIC_CLI.pkt) |
| 🔄 Dynamic | RIP v1 | [📖 Guide](Dynamic/Rip_V1/rip_v1.md) | [`DYNAMIC_RIP_1.pkt`](Dynamic/Rip_V1/DYNAMIC_RIP_1.pkt) |
| 🔄 Dynamic | RIP v2 | [📖 Guide](Dynamic/Rip_V2/rip_v2.md) | [`RIP_2.pkt`](Dynamic/Rip_V2/RIP_2.pkt) |
| 🔄 Dynamic | EIGRP | [📖 Guide](Dynamic/EIGRP/eigrp.md) | [`EIGRP.pkt`](Dynamic/EIGRP/EIGRP.pkt) |
| 🔄 Dynamic | OSPF | [📖 Guide](Dynamic/OSPF/ospf.md) | [`OSPF.pkt`](Dynamic/OSPF/OSPF.pkt) |

**Every lab uses the same topology:** 5 Routers · 5 Switches · 10 PCs

```text
PCs → Switch → R1 ── R2 ── R3 ── R4 ── R5 ← Switch ← PCs
```

---

## 🧠 Static vs Dynamic Routing

| | 🔒 Static | 🔄 Dynamic |
| --- | --- | --- |
| **Routes** | Typed by hand (`ip route ...`) | Learned automatically by routers |
| **Network changes** | Must update manually | Adapts by itself |
| **Best for** | Small, simple networks | Medium to large networks |
| **Protocols** | — | RIP v1, RIP v2, EIGRP, OSPF |

---

## 🚀 How to Use

1. Open the `.pkt` file in **Cisco Packet Tracer**.
2. Follow the matching **guide** to see every router command.
3. Verify with `show ip route` and `ping` between PCs. ✅

---

<div align="center">

[⬅️ Back to all semesters](../../README.md)

</div>
