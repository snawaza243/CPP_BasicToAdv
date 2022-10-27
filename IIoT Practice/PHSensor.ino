int sensorValue = 0;
float voltage = 0.00f;
float pHvalue = 0.00f;
float calibrationFactor = 3.50f;

void setup() {
  Serial.begin(9600);
}

void loop(){
  int sensorValue = analogRead(A0);
  voltage = (float)sensorValue*(5/1023.0);
  pHvalue = voltage * calibrationFactor;

  Serial.print("Ph: ");
  Serial.println(pHvalue);
  delay(1000);
  
}
