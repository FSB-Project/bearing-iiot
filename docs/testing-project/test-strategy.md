# Test Strategy

This document describes the testing methods and scenarios for the IIoT Bearing PdM system.

## Testing Phases
- **Unit Testing**: Testing individual signal processing functions.
- **Integration Testing**: Testing connectivity between sensors and the gateway.
- **Field Testing**: Real-world field trials at the factory.

## Test Cases

### 1. Hardware Testing
- **TC-HW-01**: Verify accelerometer accuracy against a calibrated standard.
- **TC-HW-02**: Verify thermal endurance of the ESP32 in an industrial environment.
- **TC-HW-03**: Measure power consumption of the sensor node.

### 2. Connectivity Testing
- **TC-CN-01**: Verify automatic reconnection capability upon Wi-Fi/LoRa signal loss.
- **TC-CN-02**: Measure data transmission latency from ESP32 to Gateway.

### 3. Software & AI Testing
- **TC-SW-01**: Verify the accuracy of the RUL prediction model.
- **TC-SW-02**: Measure Dashboard response time when querying large datasets.
