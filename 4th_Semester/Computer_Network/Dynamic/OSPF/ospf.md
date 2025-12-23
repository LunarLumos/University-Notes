# OSPF 5 ROUTER 5 SWITCH 10 PC
---

#  NETWORK SETUP

### LAN

| Router | LAN Network    | Router IP   | PC IPs                   |
| ------ | -------------- | ----------- | ------------------------ |
| R1     | 192.168.1.0/24 | 192.168.1.1 | 192.168.1.2, 192.168.1.3 |
| R2     | 192.168.2.0/24 | 192.168.2.1 | 192.168.2.2, 192.168.2.3 |
| R3     | 192.168.3.0/24 | 192.168.3.1 | 192.168.3.2, 192.168.3.3 |
| R4     | 192.168.4.0/24 | 192.168.4.1 | 192.168.4.2, 192.168.4.3 |
| R5     | 192.168.5.0/24 | 192.168.5.1 | 192.168.5.2, 192.168.5.3 |

### WAN (Serial /30)

| Link  | Network     | Router A | Router B |
| ----- | ----------- | -------- | -------- |
| R1–R2 | 10.0.0.0/30 | 10.0.0.1 | 10.0.0.2 |
| R2–R3 | 20.0.0.0/30 | 20.0.0.1 | 20.0.0.2 |
| R3–R4 | 30.0.0.0/30 | 30.0.0.1 | 30.0.0.2 |
| R4–R5 | 40.0.0.0/30 | 40.0.0.1 | 40.0.0.2 |

Subnet masks same as before.

---

#  STEP-1: ROUTER INTERFACES CONFIG

---

##  ROUTER-1 (R1)

```
enable
configure terminal
hostname R1

! LAN
interface fa0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
exit

! WAN to R2
interface se2/0
ip address 10.0.0.1 255.255.255.252
clock rate 64000
no shutdown
exit
```

---

##  ROUTER-2 (R2)

```
enable
configure terminal
hostname R2

! LAN
interface fa0/0
ip address 192.168.2.1 255.255.255.0
no shutdown
exit

! WAN to R1
interface se2/0
ip address 10.0.0.2 255.255.255.252
no shutdown
exit

! WAN to R3
interface se3/0
ip address 20.0.0.1 255.255.255.252
clock rate 64000
no shutdown
exit
```

---

##  ROUTER-3 (R3)

```
enable
configure terminal
hostname R3

! LAN
interface fa0/0
ip address 192.168.3.1 255.255.255.0
no shutdown
exit

! WAN to R2
interface se2/0
ip address 20.0.0.2 255.255.255.252
no shutdown
exit

! WAN to R4
interface se3/0
ip address 30.0.0.1 255.255.255.252
clock rate 64000
no shutdown
exit
```

---

##  ROUTER-4 (R4)

```
enable
configure terminal
hostname R4

! LAN
interface fa0/0
ip address 192.168.4.1 255.255.255.0
no shutdown
exit

! WAN to R3
interface se2/0
ip address 30.0.0.2 255.255.255.252
no shutdown
exit

! WAN to R5
interface se3/0
ip address 40.0.0.1 255.255.255.252
clock rate 64000
no shutdown
exit
```

---

##  ROUTER-5 (R5)

```
enable
configure terminal
hostname R5

! LAN
interface fa0/0
ip address 192.168.5.1 255.255.255.0
no shutdown
exit

! WAN to R4
interface se2/0
ip address 40.0.0.2 255.255.255.252
no shutdown
exit
```

---

#  STEP-2: ENABLE OSPF (ROUTER-BY-ROUTER)

---

##  ROUTER-1 (R1)

```
router ospf 1
network 192.168.1.0 0.0.0.255 area 0
network 10.0.0.0 0.0.0.3 area 0
exit
```

---

##  ROUTER-2 (R2)

```
router ospf 1
network 192.168.2.0 0.0.0.255 area 0
network 10.0.0.0 0.0.0.3 area 0
network 20.0.0.0 0.0.0.3 area 0
exit
```

---

##  ROUTER-3 (R3)

```
router ospf 1
network 192.168.3.0 0.0.0.255 area 0
network 20.0.0.0 0.0.0.3 area 0
network 30.0.0.0 0.0.0.3 area 0
exit
```

---

##  ROUTER-4 (R4)

```
router ospf 1
network 192.168.4.0 0.0.0.255 area 0
network 30.0.0.0 0.0.0.3 area 0
network 40.0.0.0 0.0.0.3 area 0
exit
```

---

##  ROUTER-5 (R5)

```
router ospf 1
network 192.168.5.0 0.0.0.255 area 0
network 40.0.0.0 0.0.0.3 area 0
exit
```

---

#  STEP-3: SAVE CONFIG

```
end
write memory
```

---

#  STEP-4: VERIFY OSPF

Check neighbors:

```
show ip ospf neighbor
```

Check OSPF routes:

```
show ip route
```

Look for `O` routes (OSPF learned).

---

#  STEP-5: TEST CONNECTIVITY

From **PC-1**:

```
ping 192.168.5.2
```

✔ Ping success → **OSPF WORKS PERFECTLY**

---

#  OSPF QUICK MEMORY (EXAM)

* Single area → **area 0**
* Command → `network <IP> <wildcard> area 0`
* Wildcard mask → `/24 = 0.0.0.255, /30 = 0.0.0.3`
* Look for **O** in routing table → learned via OSPF
* `show ip ospf neighbor` → adjacency check

---

# ⚡ OSPF vs RIP SUMMARY

| Feature       | RIP v2          | OSPF               |
| ------------- | --------------- | ------------------ |
| Protocol type | Distance-vector | Link-state         |
| Metric        | Hop count       | Cost (bandwidth)   |
| Classless     | ✅               | ✅                  |
| Convergence   | Slow            | Fast               |
| Updates       | Periodic        | On topology change |
| Scale         | Small networks  | Large networks     |

---

