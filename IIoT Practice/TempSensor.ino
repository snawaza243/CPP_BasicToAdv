#include <OneWire.h>
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(& oneWire);

void setup(void)
{
  Serial.begin(9600);
  Serial.println("DallasTemperature IC Demo");
  sensors.begin();
  
}

void loop()
{
  Serial.print("Requesting remperatures... ");
  sensors.requestTemperatures();
  Serial.println("Done");
  Serial.println(sensors.getTempCByIndex(0));
  delay(100);
  
}
