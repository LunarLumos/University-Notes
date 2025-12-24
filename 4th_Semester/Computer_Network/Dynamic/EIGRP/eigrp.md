## EIGRP 5 ROUTERS 5 SWITCHS 10 PC
---

#  NETWORK DESIGN 

##  LAN NETWORKS

| Router | LAN            | Router IP   | PC IPs | Gateway     |
| ------ | -------------- | ----------- | ------ | ----------- |
| R1     | 192.168.1.0/24 | 192.168.1.1 | .2, .3 | 192.168.1.1 |
| R2     | 192.168.2.0/24 | 192.168.2.1 | .2, .3 | 192.168.2.1 |
| R3     | 192.168.3.0/24 | 192.168.3.1 | .2, .3 | 192.168.3.1 |
| R4     | 192.168.4.0/24 | 192.168.4.1 | .2, .3 | 192.168.4.1 |
| R5     | 192.168.5.0/24 | 192.168.5.1 | .2, .3 | 192.168.5.1 |

Subnet mask (ALL PCs):

```
255.255.255.0
```

---

##  WAN (SERIAL /30)

| Link  | Network     | Router A | Router B |
| ----- | ----------- | -------- | -------- |
| R1–R2 | 10.0.0.0/30 | 10.0.0.1 | 10.0.0.2 |
| R2–R3 | 20.0.0.0/30 | 20.0.0.1 | 20.0.0.2 |
| R3–R4 | 30.0.0.0/30 | 30.0.0.1 | 30.0.0.2 |
| R4–R5 | 40.0.0.0/30 | 40.0.0.1 | 40.0.0.2 |

WAN mask:

```
255.255.255.252
```

---

#  STEP-1: ROUTER CONFIGURATION 

---

##  ROUTER-1 (R1)

```
enable
configure terminal
hostname R1

interface fa0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
exit

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

interface fa0/0
ip address 192.168.2.1 255.255.255.0
no shutdown
exit

interface se2/0
ip address 10.0.0.2 255.255.255.252
no shutdown
exit

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

interface fa0/0
ip address 192.168.3.1 255.255.255.0
no shutdown
exit

interface se2/0
ip address 20.0.0.2 255.255.255.252
no shutdown
exit

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

interface fa0/0
ip address 192.168.4.1 255.255.255.0
no shutdown
exit

interface se2/0
ip address 30.0.0.2 255.255.255.252
no shutdown
exit

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

interface fa0/0
ip address 192.168.5.1 255.255.255.0
no shutdown
exit

interface se2/0
ip address 40.0.0.2 255.255.255.252
no shutdown
exit
```

---

#  STEP-2: EIGRP CONFIGURATION (AS = 100)

 **AS NUMBER MUST BE SAME ON ALL ROUTERS**

---

##  R1

```
router eigrp 100
no auto-summary
network 192.168.1.0
network 10.0.0.0
exit
```

---

##  R2

```
router eigrp 100
no auto-summary
network 192.168.2.0
network 10.0.0.0
network 20.0.0.0
exit
```

---

##  R3

```
router eigrp 100
no auto-summary
network 192.168.3.0
network 20.0.0.0
network 30.0.0.0
exit
```

---

##  R4

```
router eigrp 100
no auto-summary
network 192.168.4.0
network 30.0.0.0
network 40.0.0.0
exit
```

---

##  R5

```
router eigrp 100
no auto-summary
network 192.168.5.0
network 40.0.0.0
exit
```

---

#  STEP-3: SAVE CONFIG (DON’T FORGET)

```
end
write memory
```

---

## STEP-4: VERIFY EIGRP 

### Neighbors:

```
show ip eigrp neighbors
```

### Routing table:

```
show ip route
```

Look for:

```
D 192.168.x.0
```

`D` = **EIGRP learned route**

---

# STEP-5: TEST (MOST IMPORTANT)

From **PC-1**:

```
ping 192.168.5.2
```

✔ Ping OK = **EIGRP SUCCESS**

---

#  EIGRP QUICK MEMORY

* EIGRP = **Hybrid routing protocol**
* Metric = **Bandwidth + Delay**
* Algorithm = **DUAL**
* Multicast = **224.0.0.10**
* Classless → supports VLSM
* Very fast convergence

---
