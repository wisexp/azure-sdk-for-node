// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252f%2524Resources%252fNotificationHubs%26ExpiresOn%3d1361804491%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3djxGf2lCIVtzh1YwZaihpYlRq4LwPToSZekbnpmyfm9s%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '8228d56f-8206-4202-86db-b820b8eaf4a4',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 25 Feb 2013 14:41:30 GMT',
  'content-length': '564' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .get('/$Resources/NotificationHubs')
  .reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs</id><updated>2013-02-25T14:41:34Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/myhub</id><title type=\"text\">myhub</title><published>2013-02-23T00:22:23Z</published><updated>2013-02-23T00:22:23Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhub\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>cVV3cmNZOCkkdXktXl8qbQ==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>Kj5FUlB4UmM1KXAybD1RPQ==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs\"><id>https://ciserversb.servicebus.windows.net/xplathub3</id><title type=\"text\">xplathub3</title><published>2013-02-25T14:40:54Z</published><updated>2013-02-25T14:40:54Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../xplathub3\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>OF9heDZPVjUkeXVRXS1nXQ==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>X1Y/YWxFcyQzL2FwUTMuXw==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Mon, 25 Feb 2013 14:41:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub1%26ExpiresOn%3d1361804493%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dIK96drHqcyjSk%252fGEGnM8DMXVVoJDH9eywgVbWiEImhk%253d&wrap_access_token_expires_in=1200", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '1eba4c54-9609-41b9-91e8-eeba643cd6fd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 25 Feb 2013 14:41:33 GMT',
  'content-length': '542' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub3%26ExpiresOn%3d1361804494%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dOMbdk5f4N8oUMDgPLncKCovRsCQmtS04bGRXRScJBF4%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': '3d360cc0-cc7f-48a7-9805-af6faf6b3851',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 25 Feb 2013 14:41:33 GMT',
  'content-length': '538' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/xplathub1', '*')
  .reply(201, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>https://ciserversb.servicebus.windows.net/xplathub1</id><title type=\"text\">xplathub1</title><published>2013-02-25T14:41:34Z</published><updated>2013-02-25T14:41:34Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/xplathub1\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>YTU6anx7c2l1ZGtNQlB7Sg==</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>fVg/OGtzfHBsMHd7RzZlXg==</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Mon, 25 Feb 2013 14:41:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .delete('/xplathub3')
  .reply(200, "", { 'content-length': '0',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Mon, 25 Feb 2013 14:41:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb-sb.accesscontrol.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/WRAPv0.9/', '*')
  .reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathub1%252fMessages%26ExpiresOn%3d1361804497%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dXKjnyuDUHvDli5fFTK3oXtIO6ULkZDy50zJuX7O%252fcQ8%253d&wrap_access_token_expires_in=1199", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=us-ascii',
  expires: '-1',
  'request-id': 'd3318eec-f05e-4190-9e9b-173817bc7939',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 25 Feb 2013 14:41:36 GMT',
  'content-length': '555' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversb.servicebus.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/xplathub1/Messages', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml; charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Mon, 25 Feb 2013 14:41:37 GMT' });
 return result; }]];