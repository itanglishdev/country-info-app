function Footer() {

  let  date = new Date().getFullYear();
  return ( 
  <footer>
    <p>Group project at DCI by <a href={"https://github.com/ezekielbuzzi"}>Hezikiel</a>, <a href={"https://github.com/Thili007"}>Thili</a> and <a href={"https://github.com/itanglishdev"}>Chris</a> .   All right reserved. Copyright {date}</p>
  </footer> );
}

export default Footer;