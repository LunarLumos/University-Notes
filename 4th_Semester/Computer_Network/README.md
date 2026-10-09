# COMPUTER NETWORK LABS
---

**Cisco Packet Tracer** labs with full router commands.

Topology (all labs): **5 ROUTERS 5 SWITCHES 10 PC**

```
PCs → Switch → R1 → R2 → R3 → R4 → R5 ← Switch ← PCs
```

---

#  LABS

| Type | Lab | Guide | Packet Tracer File |
| ---- | --- | ----- | ------------------ |
| Static | Static Routing | [README](Static/README.md) | [STATIC_CLI.pkt](Static/STATIC_CLI.pkt) |
| Dynamic | RIP v1 | [rip_v1.md](Dynamic/Rip_V1/rip_v1.md) | [DYNAMIC_RIP_1.pkt](Dynamic/Rip_V1/DYNAMIC_RIP_1.pkt) |
| Dynamic | RIP v2 | [rip_v2.md](Dynamic/Rip_V2/rip_v2.md) | [RIP_2.pkt](Dynamic/Rip_V2/RIP_2.pkt) |
| Dynamic | EIGRP | [eigrp.md](Dynamic/EIGRP/eigrp.md) | [EIGRP.pkt](Dynamic/EIGRP/EIGRP.pkt) |
| Dynamic | OSPF | [ospf.md](Dynamic/OSPF/ospf.md) | [OSPF.pkt](Dynamic/OSPF/OSPF.pkt) |

---

#  STATIC VS DYNAMIC

| Point | Static | Dynamic |
| ----- | ------ | ------- |
| Routes | Typed by hand | Learned automatically |
| Network change | Update manually | Adapts by itself |
| Best for | Small networks | Medium / large networks |
| Protocols | - | RIP v1, RIP v2, EIGRP, OSPF |

---

#  HOW TO USE

1. Open the `.pkt` file in **Cisco Packet Tracer**
2. Follow the guide for router commands
3. Verify:

```
show ip route
```

```
ping 192.168.5.2
```

✔ Ping OK = **LAB SUCCESS**

---
