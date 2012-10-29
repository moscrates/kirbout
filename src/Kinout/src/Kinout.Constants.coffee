###
 * Description or Responsability
 *
 * @namespace KINOUT
 * @class Boot
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
###

KINOUT.Constants =

    MARKUP:
        GLOW: "<div class='glow'></div>"
        COPYRIGHT: "<div class='copyright'><a href='http://biojazzard.github.com/kirbout'>birb<em>out</em></a>Glued by biojazzard</div>"
        CREDITS: "<div class='credits'><p>Based on <a href='https://github.com/soyjavi/Kinout'>kinoutJS</a> by <a href='https://github.com/soyjavi'>Javier Jiménez Villar</a> and <a href='https://github.com/bastianallgeier/kirbycms'>kirby</a> by <a href='https://github.com/bastianallgeier'>Bastian Allgeier</a></p></div>"
        PROGRESS:
            horizontal: "<div class='progress horizontal' value='0' max='100'><span></span></div>"
            vertical: "<div class='progress vertical' value='0' max='100'><span></span></div>"
        KEYBOARD: "<div class='keyboard'><div class='btn-group'><button class='btn spacer'>&nbsp;</button><button class='btn up'>Up &uarr;</button><button class='btn spacer'>&nbsp;</button></div><div class='btn-group'><button class='btn left'>&larr; Left</button><button class='btn down'>Down &darr;</button><button class='btn right'>Right &rarr;</button></div></div>"

    SELECTOR:
        KINOUT: ".kirbout"
        SLIDE: ".kirbout>section"
        SUBSLIDE: ".kirbout>section.present>article"

        STEP: "section.present > article.present [data-step]"
        STEP_TO_SHOW: ":not([data-run='success'])"
        STEP_TO_HIDE: "[data-run='success']"

        PROGRESS:
            horizontal: ".progress.horizontal"
            vertical: ".progress.vertical"
        
        KEYBOARD:
            left: ".btn.left"
            right: ".btn.right"
            up: ".btn.up"
            down: ".btn.down"

    STYLE:
        PAST: "past"
        PRESENT: "present"
        FUTURE: "future"