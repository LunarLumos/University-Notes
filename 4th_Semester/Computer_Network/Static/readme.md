## STATIC 5 ROUTER, 5 SWITCG AND 10 DEVICES

* **Fa0/0** for LAN
* **Serial (Se)** for WAN
* **/30 WAN networks**
* **Static routing**

---

#  BASIC RULE (REMEMBER THIS)

* LAN IP = **192.168.X.1**
* PCs = **.2 , .3**
* LAN Mask = **255.255.255.0**
* WAN Mask = **255.255.255.252**

---

# 🔹 WAN IP PLAN (SERIAL)

| Link  | Network     | Router A | Router B |
| ----- | ----------- | -------- | -------- |
| R1–R2 | 10.0.0.0/30 | 10.0.0.1 | 10.0.0.2 |
| R2–R3 | 20.0.0.0/30 | 20.0.0.1 | 20.0.0.2 |
| R3–R4 | 30.0.0.0/30 | 30.0.0.1 | 30.0.0.2 |
| R4–R5 | 40.0.0.0/30 | 40.0.0.1 | 40.0.0.2 |

---

#  ROUTER–1 (R1) — FULL COMMANDS

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

ip route 192.168.2.0 255.255.255.0 10.0.0.2
ip route 192.168.3.0 255.255.255.0 10.0.0.2
ip route 192.168.4.0 255.255.255.0 10.0.0.2
ip route 192.168.5.0 255.255.255.0 10.0.0.2

end
write memory
```

---

#  ROUTER–2 (R2)

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

ip route 192.168.1.0 255.255.255.0 10.0.0.1
ip route 192.168.3.0 255.255.255.0 20.0.0.2
ip route 192.168.4.0 255.255.255.0 20.0.0.2
ip route 192.168.5.0 255.255.255.0 20.0.0.2

end
write memory
```

---

#  ROUTER–3 (R3)

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

ip route 192.168.1.0 255.255.255.0 20.0.0.1
ip route 192.168.2.0 255.255.255.0 20.0.0.1
ip route 192.168.4.0 255.255.255.0 30.0.0.2
ip route 192.168.5.0 255.255.255.0 30.0.0.2

end
write memory
```

---

#  ROUTER–4 (R4)

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

ip route 192.168.1.0 255.255.255.0 30.0.0.1
ip route 192.168.2.0 255.255.255.0 30.0.0.1
ip route 192.168.3.0 255.255.255.0 30.0.0.1
ip route 192.168.5.0 255.255.255.0 40.0.0.2

end
write memory
```

---

#  ROUTER–5 (R5) (YOUR ROUTER)

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

ip route 192.168.1.0 255.255.255.0 40.0.0.1
ip route 192.168.2.0 255.255.255.0 40.0.0.1
ip route 192.168.3.0 255.255.255.0 40.0.0.1
ip route 192.168.4.0 255.255.255.0 40.0.0.1

end
write memory
```

---

# 🔍 FINAL CHECK (EXAM MUST)

On **any router**:

```
show ip interface brief
show ip route
```

From **PC1**:

```
ping 192.168.5.2
```

✔ Ping works = **LAB PASS GUARANTEED** 

---


