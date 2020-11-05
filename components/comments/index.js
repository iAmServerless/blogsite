import { useEffect } from "react"

export default function() {
    useEffect(() => {
        const script = document.getElementById('hcb').innerHTML;
        window.eval(script);
    }, [])
    return (
        <>
        <div id="HCB_comment_box">
            loading comments...
        </div>
        <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
        <script
            id="hcb"
            dangerouslySetInnerHTML={{
              __html: ` 
              if(!window.hcb_user) {
                  hcb_user={};
              } 
              (function() {
                  var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24f2s4VZdXQZRH.n0fJiAD1."+"&opts=16862&num=10&ts=1604568496577");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})();
          `,
            }}
          />
          </>
    )
}