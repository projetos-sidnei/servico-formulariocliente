FROM alpine:latest
LABEL author="Eduardo Ortiz"
ENV server_name=clientes.tigcm.com.br
RUN apk add --no-cache apache2-ssl
RUN rm -rf /var/www/localhost/cgi-bin/
CMD exec /usr/sbin/httpd -D FOREGROUND -f /etc/apache2/httpd.conf