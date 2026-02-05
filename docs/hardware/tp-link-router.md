# TP-Link TL-WR841N Wireless Router

The TP-Link TL-WR841N is a 300Mbps Wireless N Router that serves as the network backbone for the IIoT Bearing Monitoring System, providing robust local connectivity for all edge devices.

## Technical Specifications

| Feature | Details |
| :--- | :--- |
| **Model** | TL-WR841N |
| **Wireless Standards** | IEEE 802.11n, IEEE 802.11g, IEEE 802.11b |
| **Frequency** | 2.4 - 2.4835 GHz |
| **Signal Rate** | Up to 300 Mbps |
| **Antennas** | 2x 5dBi Fixed Omni-Directional Antennas |
| **Ethernet Ports** | 4x 10/100Mbps LAN Ports, 1x 10/100Mbps WAN Port |
| **Security** | WEP, WPA/WPA2, WPA-PSK/WPA2-PSK |
| **Power Supply** | 9VDC / 0.6A |
| **Dimensions** | 192 x 134 x 33 mm (7.6 x 5.3 x 1.3 in) |

## System Role

In the context of the Bearing IIoT project, the TL-WR841N router performs the following critical functions:

- **Local Network Infrastructure**: Establishes a dedicated Wi-Fi network for communication between ESP32 data acquisition nodes and the Raspberry Pi gateway.
- **DHCP Management**: Assigns static and dynamic IP addresses to ensure consistent addressing within the local sensor network.
- **WAN Gateway**: Connects the local IIoT cluster to the external internet, allowing the Raspberry Pi to forward processed data to the Cloud Server.
- **Network Segmentation**: Provides a secure and isolated environment for sensor data traffic, minimizing latency and interference.

## Configuration and Setup

### Wireless Network Credentials
To connect the ESP32 N16R8 nodes and the Raspberry Pi gateway to the local network, use the following credentials:

- **SSID**: `IIoT_Bearing_Network` (Example)
- **Password**: `YourSecurePassword` (Example)

### Identifying the Router (BSSID)
In environments with multiple access points, it is essential to identify the specific BSSID of the router to ensure stable connections. On a Windows machine connected to the router, execute the following command in the Command Prompt or PowerShell:

```powershell
netsh wlan show interfaces
```

Locate the **BSSID** field in the output to identify the unique MAC address of the router's wireless interface.

For example, if the output displays:
`AP BSSID : c0:25:e9:dd:40:ae`

When configuring the ESP32 connection in code, the BSSID should be formatted as a hex array:
`{0xC0, 0x25, 0xE9, 0xDD, 0x40, 0xAE}`

### Static IP Assignment (Address Reservation)
To ensure consistent communication, each **ESP32 N16R8** node must be assigned a fixed IP address via the router's Address Reservation (ARP binding) feature.

1.  Access the router's web management interface (typically `http://192.168.0.1`).
2.  Navigate to **DHCP** > **Address Reservation**.
3.  Click **Add New**.
4.  Enter the **MAC Address** of the ESP32 node.
5.  Enter the reserved **IP Address** (e.g., `192.168.0.101`).
6.  Set the **Status** to **Enabled** and click **Save**.

> [!NOTE]
> Binding the MAC address to a specific IP ensures that the MQTT broker (Raspberry Pi) and other services can always locate the sensor nodes without network discovery overhead.

## Key Features

- **300Mbps Speed**: Sufficient bandwidth for high-frequency vibration data transmission from multiple ESP32 nodes simultaneously.
- **WPS Button**: Simplifies the process of securing the wireless connection for new devices.
- **Bandwidth Control**: IP-based QoS allows the prioritization of critical MQTT traffic over other network activities.
- **IPv6 Support**: Future-proofing the network infrastructure for modern internet protocols.
