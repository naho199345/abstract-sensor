class Sensor {
    constructor() {
        this.powerStatus = "off";
        this.status = "";
        this.reportingInterval = 10000;
    }
    turn(onAndOff) {
        if (onAndOff === "on") {
            if (this.powerStatus === "on") {
                throw new Error('no')
            }
            this.powerStatus = "on"
            this.status = 'idle'
            this.reportingInterval=3000;
            setTimeout(() => {
                this.status = 'sensingDistance'
                setTimeout(() => {
                    this.status = 'reportingData'
                    setTimeout(() => {
                        this.status = "idle"
                    }, 1000)
                }, 500)
            }, this.reportingInterval)

        } else if (onAndOff === "off") {
            this.powerStatus = "off"
        }
        return this.powerStatus;
    }

}

class IotServer {
    constructor() {
        this.starts = [];
    }
    publish({ deviceId, actionId, payload }) {
        this.starts[0].deviceId = deviceId
        this.starts[0].actionId = actionId
        this.starts[0].payload = payload

    }
    start([sensor]) {
        this.starts.push(sensor)
    }

}

module.exports = {
    Sensor,
    IotServer,
};









