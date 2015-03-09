(function(window) {
  function Alcatraz() {}

  Alcatraz.root_url = null;

  Alcatraz.storeCard = function(data, callback) {
    return $.ajax({
      url: this.root_url + "/cards",
      dataType: "jsonp",
      data: $.extend({}, data, {
        _method: 'post'
      }),
      success: callback
    });
  };

  Alcatraz.getCard = function(key, passcode, id, callback) {
    return $.jsonp({
      url: this.root_url + "/cards/" + id,
      callback: 'callback',
      dataType: "json",
      callbackParameter: "callback",
      data: {
        auth: {
          public_key: key,
          passcode: passcode
        }
      },
      success: callback,
      error: callback
    });
  };

  Alcatraz.storeData = function(data, callback) {
    return $.ajax({
      url: this.root_url + "/secure_data",
      dataType: "jsonp",
      data: $.extend({}, data, {
        _method: 'post'
      }),
      success: callback
    });
  };

  Alcatraz.getData = function(key, passcode, id, callback) {
    return $.jsonp({
      url: this.root_url + "/secure_data/" + id,
      callback: 'callback',
      dataType: "json",
      callbackParameter: "callback",
      data: {
        auth: {
          public_key: key,
          passcode: passcode
        }
      },
      success: callback,
      error: callback
    });
  };

  window.Alcatraz = Alcatraz;

  return Alcatraz;

})(window);
