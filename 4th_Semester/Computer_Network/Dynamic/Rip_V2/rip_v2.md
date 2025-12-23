# 5 ROUTER 5 SWITCH 10 PC
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

---

#  STEP-1: ROUTER CONFIGURATION 

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

! WAN
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

## 🔹 ROUTER-4 (R4)

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

## 🔹 ROUTER-5 (R5)

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

# 🔁 STEP-2: ENABLE RIP v2

**RULES**:

* `router rip` → enable RIP
* `version 2` → classless
* `no auto-summary` → prevents wrong summarization

---

## 🔹 ROUTER-1 (R1)

```
router rip
version 2
no auto-summary
network 192.168.1.0
network 10.0.0.0
exit
```

---

## 🔹 ROUTER-2 (R2)

```
router rip
version 2
no auto-summary
network 192.168.2.0
network 10.0.0.0
network 20.0.0.0
exit
```

---

## 🔹 ROUTER-3 (R3)

```
router rip
version 2
no auto-summary
network 192.168.3.0
network 20.0.0.0
network 30.0.0.0
exit
```

---

## 🔹 ROUTER-4 (R4)

```
router rip
version 2
no auto-summary
network 192.168.4.0
network 30.0.0.0
network 40.0.0.0
exit
```

---

## 🔹 ROUTER-5 (R5)

```
router rip
version 2
no auto-summary
network 192.168.5.0
network 40.0.0.0
exit
```

---

# 💾 STEP-3: SAVE CONFIGURATION

```
end
write memory
```

---

# 🔍 STEP-4: VERIFY CONFIGURATION

```
show ip route
```

✔ Should see `R` routes learned via RIP

```
show ip protocols
```

✔ Should show **RIP version 2**, **networks advertised**, **multicast updates 224.0.0.9**

---

# 🧪 STEP-5: TEST CONNECTIVITY

From **PC1**:

```
ping 192.168.5.2
```

✔ Success = **RIP v2 WORKING**

---
