(function(window) {
  function Alcatraz() {}

  Alcatraz.rootUrl = null;

  Alcatraz.storeCard = function(data, callback) {
    return $.ajax({
      url: this.rootUrl + "/cards",
      dataType: "jsonp",
      data: $.extend({}, data, {
        _method: 'post'
      }),
      success: callback
    });
  };

  Alcatraz.getCard = function(key, passcode, id, callback) {
    return $.jsonp({
      url: this.rootUrl + "/cards/" + id,
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
      url: this.rootUrl + "/secure_data",
      dataType: "jsonp",
      data: $.extend({}, data, {
        _method: 'post'
      }),
      success: callback
    });
  };

  Alcatraz.getData = function(key, passcode, id, callback) {
    return $.jsonp({
      url: this.rootUrl + "/secure_data/" + id,
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
