INSERT INTO UIUSER(ID, USERNAME, LOCALE) values (1, 'testuser', null);

INSERT INTO IDENTIFIER(ID, DISCRIMINATOR, TYPE, X_ROAD_INSTANCE, MEMBER_CLASS, MEMBER_CODE, SUBSYSTEM_CODE)
values (1, 'C', 'MEMBER', 'FI', 'GOV', 'M1', null);
INSERT INTO IDENTIFIER(ID, DISCRIMINATOR, TYPE, X_ROAD_INSTANCE, MEMBER_CLASS, MEMBER_CODE, SUBSYSTEM_CODE)
values (2, 'C', 'SUBSYSTEM', 'FI', 'GOV', 'M1', 'SS1');

INSERT INTO CLIENT(ID, CONF_ID, IDENTIFIER, CLIENT_STATUS, IS_AUTHENTICATION)
values (1,null,1,'registered', 'NOSSL');
INSERT INTO CLIENT(ID, CONF_ID, IDENTIFIER, CLIENT_STATUS, IS_AUTHENTICATION)
values (2,null,2,'registered', 'SSLNOAUTH');

INSERT INTO LOCALGROUP(ID, GROUP_CODE, DESCRIPTION, UPDATED, CLIENT_ID)
values (1, 'group1', 'foo', now(), 2);
INSERT INTO LOCALGROUP(ID, GROUP_CODE, DESCRIPTION, UPDATED, CLIENT_ID)
values (2, 'group2', 'foo', now(), 2);

INSERT INTO SERVERCONF(ID, server_code, OWNER) values (1, 'TEST-INMEM-SS', 1);

UPDATE CLIENT SET CONF_ID = 1;
