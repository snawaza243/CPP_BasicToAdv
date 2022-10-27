int sensorValue = 0;
float turbidity = 0.00f;

void setup()
{
  Serial.begin(9600);
  
}

void loop()
{
  int sensorValue = analogRead(A0);
  turbidity = map(sensorValue, 0, 640, 100, 0);
  Serial.print("Turbidity: ");
  Serial.println(turbidity);
  delay(100);
}
