## 5 ROUTER % SWITCH 10 DEVICES AND RIP 1
---


```
PCs → Switch → Router → Router → Router → Router → Router
```

* **5 Routers**
* **5 Switches**
* **10 PCs**
* **Dynamic Routing = RIP v1**

---

#  IP ADDRESS PLAN 

## 🔹 LAN Networks

| Router | Network        | Router IP   | PC IPs |
| ------ | -------------- | ----------- | ------ |
| R1     | 192.168.1.0/24 | 192.168.1.1 | .2, .3 |
| R2     | 192.168.2.0/24 | 192.168.2.1 | .2, .3 |
| R3     | 192.168.3.0/24 | 192.168.3.1 | .2, .3 |
| R4     | 192.168.4.0/24 | 192.168.4.1 | .2, .3 |
| R5     | 192.168.5.0/24 | 192.168.5.1 | .2, .3 |

Mask: **255.255.255.0**

---

## 🔹 WAN (Serial) Networks

| Link  | Network     | Router A | Router B |
| ----- | ----------- | -------- | -------- |
| R1–R2 | 10.0.0.0/30 | 10.0.0.1 | 10.0.0.2 |
| R2–R3 | 20.0.0.0/30 | 20.0.0.1 | 20.0.0.2 |
| R3–R4 | 30.0.0.0/30 | 30.0.0.1 | 30.0.0.2 |
| R4–R5 | 40.0.0.0/30 | 40.0.0.1 | 40.0.0.2 |

Mask: **255.255.255.252**

---

#  STEP-1: PC IP CONFIG (EXAM FORMAT)

Example PC (R1 side):

```
IP Address: 192.168.1.2
Subnet Mask: 255.255.255.0
Default Gateway: 192.168.1.1
```

(Repeat using table)

---

#  STEP-2: ROUTER BASIC CONFIG (NO ROUTING YET)

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

#  STEP-3: ENABLE RIP v1 (MAIN PART)

---

##  ROUTER-1

```
router rip
version 1
network 192.168.1.0
network 10.0.0.0
exit
```

---

##  ROUTER-2

```
router rip
version 1
network 192.168.2.0
network 10.0.0.0
network 20.0.0.0
exit
```

---

##  ROUTER-3

```
router rip
version 1
network 192.168.3.0
network 20.0.0.0
network 30.0.0.0
exit
```

---

##  ROUTER-4

```
router rip
version 1
network 192.168.4.0
network 30.0.0.0
network 40.0.0.0
exit
```

---

##  ROUTER-5

```
router rip
version 1
network 192.168.5.0
network 40.0.0.0
exit
```

---

#  STEP-4: SAVE CONFIG

```
end
write memory
```

---

#  STEP-5: VERIFY 

```
show ip route
```


---

#  FINAL TEST

From **PC-1**:

```
ping 192.168.5.2
```

✔ Ping success = **DYNAMIC ROUTING DONE**

---


