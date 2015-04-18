int buttonStatus = LOW;
int prevButtonStatus = LOW;

void setup()
{
  Serial.begin(9600); // USB is always 12 Mbit/sec
  pinMode(5, INPUT);
}

void loop()
{
  buttonStatus = digitalRead(5);
  if (buttonStatus == HIGH && prevButtonStatus == LOW) {
    Serial.println("Button HIGH");
    prevButtonStatus = HIGH;
  }
  if (buttonStatus == LOW && prevButtonStatus == HIGH) {
    Serial.println("Button DOWN");
    prevButtonStatus = LOW;
  }
  
}
