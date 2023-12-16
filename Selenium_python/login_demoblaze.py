# Aqui se importa: El webdriver, la herramienta para poder ingresar texto y tiempo de espera
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# El navegador que se ussrá y la página dónde se hará la prueba
driver = webdriver.Chrome()
driver.get("https://www.demoblaze.com/")

# Se hace clic sobre el #linktext" para iniciar sesión
login_click = driver.find_element("id", "login2")
login_click.click()

# tiempo de espera para poder visualizar lo que se está ejecutando
time.sleep(3)

# Se ubican los campos dentro de los cuales se van a ingresar el usuario y contraseña
enter_user = driver.find_element("id", "loginusername")
enter_password = driver.find_element("id", "loginpassword")

# Se ingresa el usuario y contraseña registrada dentro del sitio
enter_user.send_keys("BlasterOne")
enter_password.send_keys("123456")

# Se da clic en el botón de login, en este caso con xpath ya que este elemento en la página no contiene id
start_login = driver.find_element("xpath", "//button[contains(text(), 'Log in')]")
start_login.click()

time.sleep(2)

driver.quit()
