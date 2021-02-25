
console.log("jabagat-index.js");

var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

client.on('connect', function () {
    console.log('connected')
    $("#sub-button").click(function (){
      var sub = $("#sub-input").val()
      client.subscribe(sub, function (err) {
        if (err) {
          console.log(err);
        }
      })
    })
});

client.on('message', function (topic, message) {
  $("#infos").prepend(`<tr><td>${topic}</td><td>${message}</td></tr>`)
  console.log(message.toString())
});

var pub_button = document.getElementById('pub-button');
pub_button.addEventListener('click', () => {
  var pub_topic_input = document.getElementById('pub-topic-input').value;
  var pub_payload_input = document.getElementById('pub-payload-input').value;
  client.publish(pub_topic_input, pub_payload_input)
});


