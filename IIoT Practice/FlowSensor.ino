#include<FlowMeter.h>
interrupt pin 2
FlowMeter*Metre;
const unsigned long period = 200;

void MeterS()
{
  //  metre count the pulses
  Metre->count();
}

void setup()
{
  Serial.begin(115200);
  pinMode(8, OUTPUT);
  Metre = new FLowMeter(digitalPin ToInterrupt(2),
            Uncalibrated Sensor, MeterISR, RISING);

}

void loop()
{
  delay(period);

  Metre->tick(period);
  Serial.println("Currenly" + String(Metre->getCurrent Flow Rate()) + "l/min," + String(Metre->getTotalVolume()) + "total.");

  if (Meter->getCurrent Flow Rate() {
  digitalWrite(8, HIGH);
  }
  else
    digitalWrite(8, LOW);
  }
