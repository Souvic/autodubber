// ---------- try it yourself form ------
/*
$("#techselect").on("change", function () {
  var label = $("option:selected", this).data("label");
  var command = $("option:selected", this).data("command");
  var port = $("option:selected", this).data("port");

  if (label) {
    if (label != $("#tryityourselflabel").text()) {
      $("#tryityourselflabel").animate({ opacity: 0 }, 400, function () {
        $(this).text(label).animate({ opacity: 1 }, 400);
      });
    }
    $("#tryityourselflabel").show("slow");
  } else {
    $("#tryityourselflabel").hide("slow");
  }

  if (command) {
    $("#tryityourselfprecommand").val(command);

    $("#tryityourselfprecommand").css("visibility", "visible");
    $("#copybutton2").css("visibility", "visible");

    $("#tryityourselfprecommand").animate({ opacity: 1 }, 1200);
    $("#copybutton2").animate({ opacity: 1 }, 1200);
  } else {
    $("#tryityourselfprecommand").animate({ opacity: 0 }, 1200);
    $("#copybutton2").animate({ opacity: 0 }, 1200);
    $("#tryityourselfprecommand").css("visibility", "hidden");
    $("#copybutton2").css("visibility", "hidden");
  }

  $("#portform").val(port).trigger("input");
});

$("#webdebuggerinput").change(function () {
  if ($("#webdebuggerinput").is(":checked")) {
    $("#webdebugurl").slideDown();
  } else {
    $("#webdebugurl").slideUp();
  }
  $("#portform").trigger("input");
});


// ---------- ------------

$("#portform").on("input", function () {
  $("#portcommand").val(
    "ssh -p 443 -R0:localhost:" +
      ($("#portform").val() || "8000") +
      ($("#webdebuggerinput").is(":checked") ? " -L4300:localhost:4300" : "") +
      " a.pinggy.io"
  );
});

function copytoclipboard(element, inputselector, amplitudemsg) {
  var portcommand = $(inputselector)[0];
  // Get the text field
  portcommand.select();
  portcommand.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(portcommand.value);
  var amplitudeEvent = "SSH url copy button clicked";
  var eventProperties = {
    url: portcommand.value,
  };
  amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
  $(element).children("i").removeClass("bi-clipboard");
  $(element).children("i").addClass("bi-check");
  setTimeout(
    function (element) {
      $(element).children("i").removeClass("bi-check");
      $(element).children("i").addClass("bi-clipboard");
    },
    1000,
    element
  );
}
*/
function trynow() {
  var amplitudeEvent = "Try now button clicked";
  var eventProperties = {};
  amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
  $("html, body").animate(
    {
      scrollTop: $("#bigcodecolumn").offset().top - 100,
    },
    1000
  );
  $("#bigcodecolumn").addClass("shadowhighlight");
  setTimeout(function () {
    $("#bigcodecolumn").removeClass("shadowhighlight");
  }, 2000);
}
function isEmail(email) {
  var regex1 = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var regex2 = /^([a-zA-Z0-9_.+-])+\@(gmail.com|yahoo.com|hotmail.com|icloud.com|bing.com|proton.me|outlook.com|aol.com)+$/;
  return regex1.test(email) && (! regex2.test(email));
}

function starttrial() {
  
  var emailinput = $("#trialemail").val();
  var nameinput = $("#actionarea").val();
  if (isEmail(emailinput) &&  nameinput!="") {
    $("#videoPlayer_1").hide()
  $("#videoPlayer_2").show()

  $("#videoPlayer_2").get(0).currentTime = 0;
  $("#videoPlayer_2").get(0).play()
  $("#emailinvalidtooltip").hide();
    var encoded = encodeURIComponent(emailinput);
    $('#button-addon2').attr("disabled", true);
    $.ajax({
      type: 'POST',
      url: "https://autodubberapi.neurals.ai/audio/",
      data: JSON.stringify({email: emailinput,name: nameinput}),
      contentType: "application/json; charset=utf-8",
      responseType: 'blob',
      success: function(response) {
        //var audioBlob = response;
        //var binaryData = [];
        //binaryData.push(response);
        //var audioURL = URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}));
        
        if($(teletype).prop("hidden")){
        $("#videoPlayer_1").get(0).load()}
        //var audioBlob = new Blob([response], { type: 'audio/mp3' });
        $("#audioPlayer_1").get(0).src = response.audio_path;


        $("#audioPlayer_1").get(0).load();
        $("#videoPlayer_1").get(0).addEventListener('loadeddata', function() {
        $("#audioPlayer_1").get(0).addEventListener('loadeddata', function() {
        $("#videoPlayer_1").get(0).controls = true;
        $("#videoPlayer_2").get(0).pause()
        $("#videoPlayer_2").hide()
        $("#videoPlayer_1").show()
        $("#videoPlayer_1").get(0).currentTime = 0;
        $("#audioPlayer_1").get(0).currentTime = 0;
        $("#videoPlayer_1").get(0).play()
        $("mailus").show();
        $('#button-addon2').attr("disabled", false);
        typeIt();
         }, false);
       }, false);
        //audioPlayer.play();
        
      },
      error: function(xhr, status, error) {
        $('#button-addon2').attr("disabled", false);
        console.log('Error:', error);
      }
    });
    //window.location = "https://dashboard.pinggy.io/starttrial?email=" + encoded;
  } else {
    if(! isEmail(emailinput)){$("#emailinvalidtooltip").show();}
    else{$("#nameinvalidtooltip").show();}
  }
}

// ---------------- price monthly yearly toggle -------------
$("#toggleswitch").change(function () {
  if (this.checked) {
    $(".monthly").hide();
    $(".yearly").show();
  } else {
    $(".yearly").hide();
    $(".monthly").show();
  }
});

// Download button system auto detect:

os_arch_to_link = {
  windows: {
    amd64: "pinggy_windows_386.exe",
  },
  linux: {
    amd64: "pinggy_linux_amd64",
  },
};

/*** typewriter ***/

$("#textchanger").teletype({
  delay: 10,
  pause: 1000,
  text: [
    "Scale your ad for multiple languages!",
    "Add a personal touch to your videos!",
    "Captivate customers in Personalized Ad!",
    "Add voiceovers to Pre-recorded videos!",
    "Lipsync Videos in Original Voice!",
    "Enhance videos with customized voices!",
    "Transform videos with Voice Cloning!"
  ],
});

let cursor = "<span>|</span>",
telecopy = teletype.innerHTML;
function typeIt() {
  if($(teletype).prop("hidden")){
  let counter = 0;
  teletype.innerHTML = cursor;
  teletype.removeAttribute("hidden");
  let i = setInterval(function(){
    teletype.innerHTML = telecopy.substr(0, counter) + cursor;
      counter++;
      if(counter === telecopy.length + 1) {
          clearInterval(i);
      }
  }, 100);
}
}


