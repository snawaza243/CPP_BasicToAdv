int cm=0;
int inches=0;

void setup()
{
  pinMode(7, OUTPUT);

  pinMode(8, INPUT);

  Serial.begin(9600);
  
}

void loop()
{
  digitalWrite(7,0);
  
//  delayMicrosecond(2);
  delay(2/1000000);

//  delayMicrosecond(10);
  digitalWrite(7,1);
  delay(1/100000);

  cm = 0.01732 * pulseIn(8,1);
  inches = (cm/2.54);

  Serial.print(cm);
  Serial.print(" cm, ");
  Serial.print(inches);
  Serial.println(" Inches");
  delay(1000);
  
  
  
}
