import { useState, useMemo, useCallback } from "react";

/*══════════════════════════════════════════════════════════════
  COMPLETE MESSIANIC PROPHECY CORPUS — 38 PROPHECIES
  Full patristic, NT fulfillment, Hebrew/Greek/French
══════════════════════════════════════════════════════════════*/
const P=[
// ── GENÈSE ──
{id:"g3",r:"Genèse 3:15",t:"Le Protévangile",d:"~1450 av.",tp:"passion",th:["alliance","messie","victoire"],
ctx:"Première annonce du salut. Dieu maudit le serpent et annonce l'inimitié entre deux descendances.",
he:"וְאֵיבָה אָשִׁית בֵּינְךָ וּבֵין הָאִשָּׁה וּבֵין זַרְעֲךָ וּבֵין זַרְעָהּ הוּא יְשׁוּפְךָ רֹאשׁ וְאַתָּה תְּשׁוּפֶנּוּ עָקֵב",
lx:"αὐτός σου τηρήσει κεφαλήν, καὶ σὺ τηρήσεις αὐτοῦ πτέρναν",
fr:"Je mettrai une hostilité entre toi et la femme, entre ta descendance et sa descendance : celle-ci te meurtrira la tête, et toi, tu lui meurtriras le talon.",
nt:[{r:"Galates 4:4",x:"Le Christ, né d'une femme, est la descendance promise."},{r:"Romains 16:20",x:"Dieu écrasera bientôt Satan sous vos pieds."},{r:"1 Jean 3:8",x:"Le Fils de Dieu est venu détruire les œuvres du diable."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,23,7 ; V,21,1",t:"Le Christ reprend le parcours d'Adam en sens inverse (récapitulation). La descendance de la femme est le Christ né de Marie, qui écrase le diable par sa Passion et sa Résurrection. La meurtrissure du talon est la Passion ; l'écrasement de la tête est la victoire définitive."},{a:"Justin",d:"~155",w:"Dialogue avec Tryphon, 100",t:"Parallèle Ève-Marie : Ève, vierge, conçoit la parole du serpent et enfante la désobéissance ; Marie, vierge, conçoit la parole de l'ange et enfante le salut. La descendance de la femme (non de l'homme) annonce la conception virginale."},{a:"Augustin",d:"~410",w:"Cité de Dieu XV,7 ; De Genesi ad litt. XI,36",t:"La descendance est le Christ total (Christus totus), tête et corps. L'inimitié traverse l'histoire de Caïn à la fin des temps. L'homme vaincu dans un sexe sera vengé dans l'autre."}],
syn:"Première annonce du plan rédempteur. Incarnation (née de femme), Passion (talon), victoire (tête). Marie = nouvelle Ève."},
{id:"g12",r:"Genèse 12:3",t:"Bénédiction d'Abraham",d:"~1450 av.",tp:"mission",th:["alliance","bénédiction","nations"],
ctx:"Dieu promet à Abraham que toutes les familles de la terre seront bénies en lui.",
he:"וְנִבְרְכוּ בְךָ כֹּל מִשְׁפְּחֹת הָאֲדָמָה",lx:"ἐνευλογηθήσονται ἐν σοὶ πᾶσαι αἱ φυλαὶ τῆς γῆς",
fr:"Toutes les familles de la terre seront bénies en toi.",
nt:[{r:"Galates 3:8,16",x:"La descendance (singulier) est le Christ. Les nations sont bénies par la foi."},{r:"Actes 3:25-26",x:"Pierre applique à Jésus : Dieu a envoyé son Serviteur pour vous bénir."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies IV,7,2",t:"La promesse ne pouvait s'accomplir par la circoncision ni la Loi, limitées à un peuple. Seul le Christ l'accomplit universellement."},{a:"Chrysostome",d:"~390",w:"Hom. sur la Genèse XXXII",t:"Le mot « toutes » (pasai) exclut une bénédiction limitée aux descendants physiques. La promesse est antérieure à la Loi de 430 ans : la Loi ne peut l'annuler."}],
syn:"L'universalité du salut est annoncée. La bénédiction passe par le Christ (descendance au singulier, Gal 3:16)."},
{id:"g14",r:"Genèse 14:18-20",t:"Melchisédech",d:"~1450 av.",tp:"sacerdoce",th:["prêtrise","roi","eucharistie"],
ctx:"Melchisédech, roi de Salem et prêtre du Très-Haut, offre pain et vin à Abraham.",
he:"וּמַלְכִּי צֶדֶק מֶלֶךְ שָׁלֵם הוֹצִיא לֶחֶם וָיָיִן וְהוּא כֹהֵן לְאֵל עֶלְיוֹן",
lx:"Μελχισεδεκ βασιλεὺς Σαλημ ἐξήνεγκεν ἄρτους καὶ οἶνον· ἦν δὲ ἱερεὺς τοῦ θεοῦ τοῦ ὑψίστου",
fr:"Melchisédech, roi de Salem, fit apporter du pain et du vin : il était prêtre du Dieu Très-Haut.",
nt:[{r:"Hébreux 7:1-28",x:"Melchisédech, sans père ni mère ni généalogie, figure du Christ prêtre éternel."},{r:"Hébreux 5:6",x:"Tu es prêtre pour toujours selon l'ordre de Melchisédech."}],
pa:[{a:"Cyprien",d:"~250",w:"Lettre 63, §4",t:"Le Christ a offert exactement ce que Melchisédech avait offert : du pain et du vin, c'est-à-dire son corps et son sang. L'Eucharistie accomplit la figure."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Glaphyres sur la Genèse II",t:"Melek-tsedeq = roi de justice ; Salem = paix. Le Christ est vrai roi de justice et de paix. L'absence de généalogie préfigure l'éternité du sacerdoce."}],
syn:"Sacerdoce unique combinant royauté et prêtrise, offrande de pain et vin : figure du Christ et de l'Eucharistie."},
{id:"g22",r:"Genèse 22:1-18",t:"Sacrifice d'Isaac",d:"~1450 av.",tp:"passion",th:["sacrifice","agneau","substitution","résurrection"],
ctx:"Dieu demande à Abraham d'offrir Isaac. Un bélier le remplace.",
he:"קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ … אֱלֹהִים יִרְאֶה לּוֹ הַשֶּׂה לְעֹלָה",
lx:"λαβὲ τὸν υἱόν σου τὸν ἀγαπητόν … ὁ θεὸς ὄψεται ἑαυτῷ πρόβατον",
fr:"Prends ton fils, ton unique, celui que tu aimes… Dieu se pourvoira de l'agneau.",
nt:[{r:"Jean 3:16",x:"Dieu a donné son Fils unique."},{r:"Hébreux 11:17-19",x:"Abraham croyait à la résurrection."},{r:"Romains 8:32",x:"Lui qui n'a pas épargné son propre Fils."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies IV,5,4",t:"Isaac porte le bois = Christ porte la croix. Le bélier dans les épines = Christ couronné d'épines."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Glaphyres sur Genèse III",t:"Moriya = Golgotha. Les trois qualificatifs (fils, unique, aimé) s'appliquent au Christ. Dieu s'est pourvu de son propre Agneau."},{a:"Augustin",d:"~420",w:"Cité de Dieu XVI,32",t:"Abraham a reçu Isaac en figure (in similitudine) : le fils est allé à la mort et en est revenu. C'est une prophétie en action."}],
syn:"Fils unique, portant le bois, substitué par un animal, revenant vivant. Le Moriya/Golgotha scelle l'unité de lieu."},
{id:"g49",r:"Genèse 49:10",t:"Le sceptre de Juda",d:"~1450 av.",tp:"royaute",th:["roi","messie","Juda","chronologie"],
ctx:"Jacob prophétise que le sceptre restera en Juda jusqu'à la venue de Shiloh.",
he:"לֹא יָסוּר שֵׁבֶט מִיהוּדָה … עַד כִּי יָבֹא שִׁילֹה",lx:"οὐκ ἐκλείψει ἄρχων ἐξ Ιουδα ἕως ἂν ἔλθῃ ᾧ ἀπόκειται",
fr:"Le sceptre ne s'éloignera pas de Juda jusqu'à ce que vienne Shiloh.",
nt:[{r:"Matthieu 1:2-3",x:"Généalogie par Juda."},{r:"Apocalypse 5:5",x:"Le lion de Juda a vaincu."}],
pa:[{a:"Justin",d:"~155",w:"1ère Apologie §32",t:"Des chefs de Juda ont commandé jusqu'au Christ. Depuis, servitude sous Rome. Preuve chronologique."},{a:"Augustin",d:"~420",w:"Contre Fauste XII,43",t:"Les Hasmonéens perdent le pouvoir au profit d'Hérode l'Iduméen : le sceptre quitte Juda exactement quand le Christ naît."}],
syn:"Argument chronologique majeur : le sceptre a cessé sous la domination romaine, au temps de la naissance du Christ."},
// ── EXODE / NOMBRES / DEUTÉRONOME ──
{id:"ex12",r:"Exode 12:46",t:"L'Agneau pascal",d:"~1400 av.",tp:"passion",th:["agneau","sacrifice","pâque"],
ctx:"L'agneau pascal doit être sans défaut et aucun os ne sera brisé.",
he:"וְעֶצֶם לֹא תִשְׁבְּרוּ בוֹ",lx:"ὀστοῦν οὐ συντρίψετε ἀπ᾿ αὐτοῦ",
fr:"Vous ne briserez aucun de ses os.",
nt:[{r:"Jean 19:33-36",x:"Les soldats ne brisèrent pas les jambes de Jésus."},{r:"1 Corinthiens 5:7",x:"Christ, notre Pâque, a été immolé."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Jean LXXXV",t:"L'agneau sans défaut = Christ sans péché. Le sang protège de la mort = le sang du Christ protège de la perdition. Les os non brisés prophétisent la crucifixion."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Jean XII",t:"La Pâque ancienne n'est qu'ombre. Le Christ est le véritable Agneau de Dieu."}],
syn:"Chaque détail du rituel pascal trouve sa correspondance dans la Passion."},
{id:"nm21",r:"Nombres 21:8-9",t:"Le serpent d'airain",d:"~1400 av.",tp:"passion",th:["croix","salut","élévation"],
ctx:"Moïse élève un serpent d'airain : quiconque le regarde est guéri.",
he:"עֲשֵׂה לְךָ שָׂרָף וְשִׂים אֹתוֹ עַל נֵס",lx:"ποίησον σεαυτῷ ὄφιν καὶ θὲς αὐτὸν ἐπὶ σημείου",
fr:"Fais-toi un serpent et place-le sur une perche : quiconque le regardera vivra.",
nt:[{r:"Jean 3:14-15",x:"Comme Moïse a élevé le serpent, il faut que le Fils de l'homme soit élevé."}],
pa:[{a:"Justin",d:"~155",w:"1ère Apologie 60",t:"Le serpent sur la perche préfigure la croix : celui qui regarde avec foi est guéri du péché."},{a:"Grégoire de Nysse",d:"~385",w:"Discours catéchétique 32",t:"Le Christ prend la forme du péché sans être pécheur, pour détruire la mort par la mort."}],
syn:"Figure confirmée par le Christ lui-même (Jn 3:14). La croix, le regard de foi, le paradoxe de la guérison."},
{id:"nm24",r:"Nombres 24:17",t:"L'étoile de Jacob",d:"~1400 av.",tp:"royaute",th:["roi","étoile","nations"],
ctx:"Oracle de Balaam : une étoile sort de Jacob, un sceptre s'élève d'Israël.",
he:"דָּרַךְ כּוֹכָב מִיַּעֲקֹב וְקָם שֵׁבֶט מִיִּשְׂרָאֵל",lx:"ἀνατελεῖ ἄστρον ἐξ Ιακωβ",
fr:"Un astre sort de Jacob, un sceptre s'élève d'Israël.",
nt:[{r:"Matthieu 2:2",x:"Les mages : Nous avons vu son étoile."},{r:"Apocalypse 22:16",x:"Je suis l'étoile brillante du matin."}],
pa:[{a:"Justin",d:"~155",w:"Dialogue 106",t:"L'étoile de Bethléem accomplit l'oracle de Balaam, prophète païen."},{a:"Irénée",d:"~180",w:"Démonstration 58",t:"L'étoile et le sceptre désignent le Christ : lumière pour les nations et roi universel."}],
syn:"L'étoile de Bethléem accomplit littéralement l'oracle prononcé par un prophète païen."},
{id:"dt18",r:"Deutéronome 18:15",t:"Le Prophète comme Moïse",d:"~1400 av.",tp:"mission",th:["prophète","messie","parole"],
ctx:"Moïse annonce un prophète semblable à lui, médiateur définitif.",
he:"נָבִיא מִקִּרְבְּךָ מֵאַחֶיךָ כָּמֹנִי יָקִים לְךָ יְהוָה אֱלֹהֶיךָ",lx:"προφήτην ὡς ἐμὲ ἀναστήσει σοι κύριος ὁ θεός σου",
fr:"L'Éternel te suscitera d'entre tes frères un prophète comme moi.",
nt:[{r:"Actes 3:22-23",x:"Pierre applique à Jésus."},{r:"Actes 7:37",x:"Étienne cite devant le Sanhédrin."},{r:"Jean 6:14",x:"La foule : Celui-ci est le Prophète."}],
pa:[{a:"Justin",d:"~155",w:"1ère Apologie §32",t:"Parallèle complet Moïse-Christ : libération, manne/pain de vie, Loi/Sermon, médiation."},{a:"Chrysostome",d:"~390",w:"Hom. sur Actes IX",t:"Le comme moi désigne la médiation, non l'égalité. Moïse est serviteur, le Christ est Fils."},{a:"Augustin",d:"~410",w:"Contre Fauste XVI,19",t:"Nouvelle Loi, nouvel Exode, nouveau peuple. Le Christ surpasse Moïse en tout."}],
syn:"Le nouveau Moïse surpassant l'ancien en tout : Loi, Exode, Alliance."},
// ── PSAUMES ──
{id:"ps2",r:"Psaume 2:7",t:"Tu es mon Fils",d:"~1000 av.",tp:"royaute",th:["roi","fils de Dieu","onction"],
ctx:"Psaume d'intronisation : Dieu déclare au roi oint qu'il est son Fils.",
he:"יְהוָה אָמַר אֵלַי בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ",lx:"Υἱός μου εἶ σύ, ἐγὼ σήμερον γεγέννηκά σε",
fr:"Tu es mon Fils ! Je t'ai engendré aujourd'hui.",
nt:[{r:"Actes 13:33",x:"Paul l'applique à la résurrection."},{r:"Hébreux 1:5",x:"Supériorité du Fils sur les anges."},{r:"Matthieu 3:17",x:"Voix au baptême : Celui-ci est mon Fils bien-aimé."}],
pa:[{a:"Athanase",d:"~350",w:"Contre les Ariens I,55",t:"Le aujourd'hui n'est pas un commencement temporel mais l'éternité du Fils. Contre les ariens : le Fils est engendré, non créé."},{a:"Augustin",d:"~400",w:"Enarrationes in Ps. 2",t:"Tout entier messianique. Les rois conspirant contre l'Oint sont ceux qui ont crucifié le Christ."}],
syn:"Fondement de la filiation divine éternelle et de l'intronisation par la Résurrection."},
{id:"ps16",r:"Psaume 16:10",t:"Tu ne laisseras pas ton Saint voir la corruption",d:"~1000 av.",tp:"resurrection",th:["résurrection","messie","mort"],
ctx:"David exprime sa confiance que Dieu ne l'abandonnera pas au séjour des morts.",
he:"לֹא תַעֲזֹב נַפְשִׁי לִשְׁאוֹל לֹא תִתֵּן חֲסִידְךָ לִרְאוֹת שָׁחַת",lx:"οὐκ ἐγκαταλείψεις τὴν ψυχήν μου εἰς ᾅδην οὐδὲ δώσεις τὸν ὅσιόν σου ἰδεῖν διαφθοράν",
fr:"Tu n'abandonneras pas mon âme au séjour des morts, tu ne permettras pas que ton Saint voie la corruption.",
nt:[{r:"Actes 2:25-31",x:"Pierre à la Pentecôte : David est mort et a vu la corruption, il parlait du Christ."},{r:"Actes 13:35-37",x:"Paul reprend l'argument à Antioche."}],
pa:[{a:"Justin",d:"~155",w:"Dialogue 97",t:"David est mort et son tombeau existe. Il parlait de celui qui est descendu aux enfers et remonté le troisième jour."},{a:"Athanase",d:"~350",w:"De l'Incarnation 26",t:"Le corps du Christ n'a pas connu la corruption car le Verbe de Vie l'habitait."}],
syn:"Preuve scripturaire fondamentale de la Résurrection. David est mort ; il parle d'un autre."},
{id:"ps22",r:"Psaume 22",t:"Le Psaume de la Passion",d:"~1000 av.",tp:"passion",th:["passion","croix","abandon"],
ctx:"David décrit un juste abandonné avec des détails de la crucifixion, mille ans avant.",
he:"אֵלִי אֵלִי לָמָה עֲזַבְתָּנִי … כָּאֲרִי יָדַי וְרַגְלָי … יְחַלְּקוּ בְגָדַי לָהֶם",
lx:"ὁ θεός μου ἵνα τί ἐγκατέλιπές με … ὤρυξαν χεῖράς μου καὶ πόδας … διεμερίσαντο τὰ ἱμάτιά μου",
fr:"Mon Dieu, pourquoi m'as-tu abandonné ? … Ils ont percé mes mains et mes pieds… Ils se partagent mes vêtements.",
nt:[{r:"Matthieu 27:46",x:"Jésus cite sur la croix."},{r:"Jean 19:23-24",x:"Partage des vêtements."},{r:"Matthieu 27:39,43",x:"Moqueries (v. 8-9)."}],
pa:[{a:"Athanase",d:"~350",w:"Lettre à Marcellinus 7-9",t:"Entièrement messianique. Le cri d'abandon = identification volontaire. La structure abandon→louange = Passion→Résurrection."},{a:"Augustin",d:"~400",w:"Enarrationes in Ps. 21",t:"Voix du Christ total. Il porte notre voix, revêtu de notre corps. Le Père ne l'a jamais quitté."},{a:"Théodoret",d:"~440",w:"Com. sur Ps. 21",t:"Détails impossibles pour David : la crucifixion n'existait pas au Xe s. av. J.-C., le tirage au sort, le dénombrement des os."},{a:"Chrysostome",d:"~390",w:"Hom. sur Mt LXXXVIII",t:"Jésus cite le v. 1 pour qu'on lise le reste et comprenne que tout était prédit."}],
syn:"La prophétie la plus détaillée de la Passion. Structure souffrance→louange = mystère pascal."},
{id:"ps34",r:"Psaume 34:21",t:"Aucun os brisé",d:"~1000 av.",tp:"passion",th:["passion","agneau"],
ctx:"L'Éternel garde tous les os du juste.",he:"שֹׁמֵר כָּל עַצְמוֹתָיו אַחַת מֵהֵנָּה לֹא נִשְׁבָּרָה",lx:"κύριος φυλάσσει πάντα τὰ ὀστᾶ αὐτῶν, ἓν ἐξ αὐτῶν οὐ συντριβήσεται",fr:"Il garde tous ses os, aucun n'est brisé.",
nt:[{r:"Jean 19:36",x:"Accompli quand les soldats ne brisent pas les jambes de Jésus."}],
pa:[{a:"Théodoret",d:"~440",w:"Com. sur Ps. 33",t:"Le juste par excellence est le Christ, dont aucun os ne fut brisé, contrairement aux deux larrons."}],syn:"Le Christ est le Juste dont Dieu garde les os dans la mort."},
{id:"ps41",r:"Psaume 41:10",t:"Trahi par un ami",d:"~1000 av.",tp:"passion",th:["passion","trahison"],
ctx:"Le psalmiste trahi par son ami qui partageait son pain.",
he:"גַּם אִישׁ שְׁלוֹמִי אֲשֶׁר בָּטַחְתִּי בוֹ אוֹכֵל לַחְמִי הִגְדִּיל עָלַי עָקֵב",lx:"ὁ ἐσθίων ἄρτους μου ἐμεγάλυνεν ἐπ᾿ ἐμὲ πτερνισμόν",fr:"Mon ami intime, qui mangeait mon pain, a levé le talon contre moi.",
nt:[{r:"Jean 13:18",x:"Jésus cite ce psaume annonçant la trahison de Judas."}],
pa:[{a:"Augustin",d:"~400",w:"Enarrationes in Ps. 40",t:"Le pain partagé est l'Eucharistie. Judas a mangé le pain du Seigneur et l'a trahi."},{a:"Chrysostome",d:"~390",w:"Hom. sur Jean LXXII",t:"Même la trahison était prévue dans l'Écriture."}],syn:"La trahison par un intime partageant le repas : accompli lors de la dernière Cène."},
{id:"ps45",r:"Psaume 45:7-8",t:"Le Roi divin",d:"~1000 av.",tp:"royaute",th:["roi","divinité","onction"],
ctx:"Le roi est appelé Dieu et oint d'une huile de joie.",
he:"כִּסְאֲךָ אֱלֹהִים עוֹלָם וָעֶד",lx:"ὁ θρόνος σου ὁ θεός εἰς τὸν αἰῶνα",fr:"Ton trône, ô Dieu, est éternel… Dieu, ton Dieu, t'a oint.",
nt:[{r:"Hébreux 1:8-9",x:"Prouve la divinité du Fils, supérieur aux anges."}],
pa:[{a:"Athanase",d:"~350",w:"Contre les Ariens I,46",t:"Le roi est appelé Elohim — preuve de la divinité du Messie."}],syn:"En appelant le roi Dieu, le psaume fonde la doctrine de la divinité du Messie."},
{id:"ps69",r:"Psaume 69:22",t:"Vinaigre et fiel",d:"~1000 av.",tp:"passion",th:["passion","souffrance"],
ctx:"On donne du fiel et du vinaigre au juste souffrant.",he:"יִתְּנוּ בְּבָרוּתִי רֹאשׁ וְלִצְמָאִי יַשְׁקוּנִי חֹמֶץ",lx:"ἔδωκαν εἰς τὸ βρῶμά μου χολήν καὶ εἰς τὴν δίψαν μου ἐπότισάν με ὄξος",fr:"Ils ont mis du fiel dans ma nourriture et du vinaigre pour ma soif.",
nt:[{r:"Matthieu 27:34",x:"Vin mêlé de fiel offert à Jésus."},{r:"Jean 19:28-29",x:"J'ai soif — éponge de vinaigre."}],
pa:[{a:"Augustin",d:"~400",w:"Enarrationes in Ps. 68",t:"Détails prophétiques impossibles à inventer. Leur accomplissement littéral confirme l'inspiration divine."}],syn:"Fiel, vinaigre, zèle pour la maison de Dieu (v. 10, cf. Jn 2:17) — tout s'accomplit."},
{id:"ps72",r:"Psaume 72",t:"Le Roi universel de justice",d:"~1000 av.",tp:"royaute",th:["roi","justice","paix","nations"],
ctx:"Un roi idéal dont le règne s'étend sur toute la terre.",he:"וְיִשְׁתַּחֲווּ לוֹ כָל מְלָכִים כָּל גּוֹיִם יַעַבְדוּהוּ",lx:"προσκυνήσουσιν αὐτῷ πάντες οἱ βασιλεῖς",fr:"Tous les rois se prosterneront, toutes les nations le serviront.",
nt:[{r:"Matthieu 2:11",x:"Les mages se prosternent."},{r:"Philippiens 2:10-11",x:"Tout genou fléchira."}],
pa:[{a:"Augustin",d:"~400",w:"Enarrationes in Ps. 71",t:"Ne peut s'appliquer à Salomon dont le règne fut limité et terni. Seul le Christ règne universellement."}],syn:"Règne messianique dépassant tout roi terrestre."},
{id:"ps110",r:"Psaume 110",t:"Le Roi-Prêtre éternel",d:"~1000 av.",tp:"sacerdoce",th:["roi","prêtrise","exaltation"],
ctx:"Oracle divin à mon Seigneur. Le psaume le plus cité dans le NT (27 fois).",
he:"נְאֻם יְהוָה לַאדֹנִי שֵׁב לִימִינִי … אַתָּה כֹהֵן לְעוֹלָם עַל דִּבְרָתִי מַלְכִּי צֶדֶק",
lx:"Εἶπεν ὁ κύριος τῷ κυρίῳ μου Κάθου ἐκ δεξιῶν μου … Σὺ ἱερεὺς εἰς τὸν αἰῶνα κατὰ τὴν τάξιν Μελχισεδεκ",
fr:"Oracle du Seigneur à mon seigneur : Siège à ma droite… Tu es prêtre pour toujours, selon Melchisédech.",
nt:[{r:"Matthieu 22:41-46",x:"Jésus confond les Pharisiens."},{r:"Hébreux 5:6 ; 7:1-28",x:"Sacerdoce éternel."},{r:"Actes 2:34-35",x:"Pierre cite à la Pentecôte."}],
pa:[{a:"Chrysostome",d:"~395",w:"Hom. sur Hébreux XII",t:"Melchisédech combine royauté et sacerdoce, interdit par la Loi. Seul le Christ peut être roi ET prêtre."},{a:"Cyrille d'Alexandrie",d:"~425",w:"Com. sur Ps. 109",t:"Siège à ma droite = égalité divine. Aucune créature n'y siège."},{a:"Augustin",d:"~400",w:"Enarrationes in Ps. 109",t:"Fils de David selon la chair, Seigneur de David selon la divinité."}],
syn:"Central pour la christologie : divinité, double nature, sacerdoce éternel."},
{id:"ps118",r:"Psaume 118:22-23",t:"La pierre rejetée",d:"~500 av.",tp:"mission",th:["rejet","messie","pierre angulaire"],
ctx:"La pierre méprisée devient la pierre d'angle.",he:"אֶבֶן מָאֲסוּ הַבּוֹנִים הָיְתָה לְרֹאשׁ פִּנָּה",lx:"λίθον ὃν ἀπεδοκίμασαν οἱ οἰκοδομοῦντες, οὗτος ἐγενήθη εἰς κεφαλὴν γωνίας",fr:"La pierre rejetée par les bâtisseurs est devenue la principale de l'angle.",
nt:[{r:"Matthieu 21:42",x:"Jésus l'applique aux chefs qui le rejettent."},{r:"Actes 4:11",x:"Pierre devant le Sanhédrin."},{r:"1 Pierre 2:7",x:"Théologie de la pierre angulaire."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,21,7",t:"Les bâtisseurs sont les chefs qui ont rejeté le Christ. Dieu l'a fait pierre d'angle de l'Église."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Is 28:16",t:"La pierre unit deux murs : Juifs et Gentils dans l'Église."}],syn:"Rejet par les autorités et glorification par la Résurrection."},
// ── ISAÏE ──
{id:"is6",r:"Isaïe 6:9-10",t:"L'endurcissement",d:"~740 av.",tp:"mission",th:["aveuglement","jugement"],
ctx:"Isaïe reçoit la mission de prêcher à un peuple qui ne comprendra pas.",
he:"שִׁמְעוּ שָׁמוֹעַ וְאַל תָּבִינוּ",lx:"ἀκοῇ ἀκούσετε καὶ οὐ μὴ συνῆτε",fr:"Vous entendrez et ne comprendrez point.",
nt:[{r:"Matthieu 13:14-15",x:"Jésus cite pour les paraboles."},{r:"Jean 12:40",x:"Jean explique l'incrédulité d'Israël."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt XLV",t:"L'endurcissement est permis, non causé par Dieu. Les paraboles sont révélation et voile."},{a:"Augustin",d:"~410",w:"Questions sur les Évangiles I,15",t:"L'aveuglement d'Israël est providentiel : il permet l'entrée des nations."}],syn:"Le mystère de l'incrédulité face au Christ. L'endurcissement permet l'extension du salut."},
{id:"is7",r:"Isaïe 7:14",t:"L'Emmanuel",d:"~735 av.",tp:"naissance",th:["naissance","vierge","emmanuel","incarnation"],
ctx:"Un signe : la vierge enfantera Emmanuel.",
he:"הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן וְקָרָאת שְׁמוֹ עִמָּנוּ אֵל",lx:"ἰδοὺ ἡ παρθένος ἐν γαστρὶ ἕξει καὶ τέξεται υἱόν … Εμμανουηλ",fr:"Voici, la vierge concevra et enfantera un fils : Emmanuel.",
nt:[{r:"Matthieu 1:22-23",x:"Matthieu cite pour la conception virginale."}],
pa:[{a:"Justin",d:"~155",w:"Dialogue 43-44, 66-68",t:"(1) Le signe doit être surnaturel. (2) La Septante (IIIe s. av. J.-C.) choisit parthenos. (3) Aquila et Théodotion changent le mot APRÈS le Christ."},{a:"Irénée",d:"~180",w:"Contre les hérésies III,21,1-6",t:"Si Jésus était né normalement, quel signe ? La Septante est un témoignage impartial pré-chrétien."},{a:"Athanase",d:"~350",w:"De l'Incarnation §33",t:"Emmanuel = Dieu venant habiter parmi les hommes. L'Incarnation accomplit pleinement le signe."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Is 7:14",t:"Emmanuel manifeste l'union des natures. Marie est Theotokos (Éphèse, 431)."}],
syn:"La prophétie la plus disputée. La Septante pré-chrétienne choisit vierge."},
{id:"is9a",r:"Isaïe 9:1-2",t:"Lumière en Galilée",d:"~735 av.",tp:"mission",th:["lumière","galilée","nations"],
ctx:"Une grande lumière se lève sur la Galilée des nations.",he:"הָעָם הַהֹלְכִים בַּחֹשֶׁךְ רָאוּ אוֹר גָּדוֹל",lx:"ὁ λαὸς ὁ πορευόμενος ἐν σκότει ἴδετε φῶς μέγα",fr:"Le peuple qui marchait dans les ténèbres a vu une grande lumière.",
nt:[{r:"Matthieu 4:13-16",x:"Jésus s'établit en Galilée, accomplissant Isaïe."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt XIV",t:"La Galilée méprisée reçoit la lumière en premier. L'Évangile est pour les humbles."}],syn:"Le ministère galiléen accomplit la prophétie. La lumière se lève loin de Jérusalem."},
{id:"is9b",r:"Isaïe 9:5-6",t:"L'Enfant divin",d:"~735 av.",tp:"royaute",th:["roi","divinité","paix"],
ctx:"Un enfant portant des titres divins.",he:"פֶּלֶא יוֹעֵץ אֵל גִּבּוֹר אֲבִיעַד שַׂר שָׁלוֹם",lx:"μεγάλης βουλῆς ἄγγελος … ἄρχων εἰρήνης",fr:"Conseiller merveilleux, Dieu puissant, Père éternel, Prince de la paix.",
nt:[{r:"Luc 1:32-33",x:"L'ange annonce le trône éternel de David."}],
pa:[{a:"Basile",d:"~370",w:"Com. sur Is 9",t:"Dieu puissant et Père éternel ne s'appliquent qu'à une personne divine."},{a:"Grégoire de Nazianze",d:"~380",w:"Discours théologiques III(29),19",t:"Réfute les ariens. Dieu puissant ne peut être une créature."}],syn:"Les quatre titres révèlent nature et mission du Messie."},
{id:"is11",r:"Isaïe 11:1-10",t:"Rameau de Jessé",d:"~735 av.",tp:"royaute",th:["roi","esprit","paix","Jessé"],
ctx:"Un rameau sort de Jessé, l'Esprit repose sur lui en plénitude.",
he:"וְיָצָא חֹטֶר מִגֵּזַע יִשָׁי וְנֵצֶר מִשָּׁרָשָׁיו יִפְרֶה",lx:"ἐξελεύσεται ῥάβδος ἐκ τῆς ῥίζης Ιεσσαι",fr:"Un rameau sortira du tronc de Jessé, un rejeton poussera de ses racines.",
nt:[{r:"Matthieu 2:23",x:"Jeu de mots : Nazareth / netzer (rejeton)."},{r:"Romains 15:12",x:"La racine de Jessé, espérance des nations."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,9,3",t:"L'Esprit septiforme qui repose sur le rameau annonce le baptême au Jourdain."},{a:"Augustin",d:"~420",w:"Sermon 89",t:"Le tronc est coupé (royauté perdue) mais un rejeton pousse : le Christ vient quand la royauté humaine a disparu."}],syn:"Descendance davidique et plénitude de l'Esprit. Les sept dons reposent sur le Christ."},
{id:"is28",r:"Isaïe 28:16",t:"Pierre angulaire",d:"~720 av.",tp:"mission",th:["pierre angulaire","foi"],
ctx:"Dieu pose en Sion une pierre éprouvée.",he:"הִנְנִי יִסַּד בְּצִיּוֹן אָבֶן בֹּחַן פִּנַּת יִקְרַת מוּסָד",lx:"ἐμβαλῶ εἰς τὰ θεμέλια Σιων λίθον ἀκρογωνιαῖον ἔντιμον",fr:"Je pose en Sion une pierre angulaire de prix.",
nt:[{r:"Romains 9:33 ; 1 Pierre 2:6",x:"Paul et Pierre l'appliquent au Christ."}],
pa:[{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Is 28:16",t:"La pierre unit deux murs : Israël et les nations."}],syn:"Le Christ, fondement de l'Église, unit juifs et païens."},
{id:"is35",r:"Isaïe 35:5-6",t:"Les miracles messianiques",d:"~720 av.",tp:"mission",th:["guérison","miracle","messie"],
ctx:"Les aveugles voient, les sourds entendent, les boiteux bondissent.",he:"אָז תִּפָּקַחְנָה עֵינֵי עִוְרִים",lx:"ἀνοιχθήσονται ὀφθαλμοὶ τυφλῶν",fr:"Alors s'ouvriront les yeux des aveugles.",
nt:[{r:"Matthieu 11:4-5",x:"Jésus répond à Jean-Baptiste en citant Isaïe 35."},{r:"Luc 7:22",x:"Même réponse dans Luc."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt XXXVI",t:"Les miracles de Jésus ne sont pas aléatoires mais correspondent exactement aux signes annoncés. Ils sont sa carte d'identité messianique."}],syn:"Les miracles du Christ sont les signes messianiques exacts d'Isaïe 35."},
{id:"is40",r:"Isaïe 40:3",t:"La voix dans le désert",d:"~700 av.",tp:"mission",th:["précurseur","désert"],
ctx:"Une voix crie dans le désert pour préparer le chemin du Seigneur.",
he:"קוֹל קוֹרֵא בַּמִּדְבָּר פַּנּוּ דֶּרֶךְ יְהוָה",lx:"φωνὴ βοῶντος ἐν τῇ ἐρήμῳ Ἑτοιμάσατε τὴν ὁδὸν κυρίου",fr:"Une voix crie dans le désert : Préparez le chemin de l'Éternel.",
nt:[{r:"Matthieu 3:3 ; Marc 1:3 ; Jean 1:23",x:"Les quatre évangiles appliquent à Jean-Baptiste."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt X",t:"Jean est la voix, le Christ est le Verbe. La voix précède et annonce."},{a:"Augustin",d:"~410",w:"Traités sur Jean IV,1",t:"La voix passe, le Verbe demeure."}],syn:"Application unanime à Jean-Baptiste. Distinction voix/Verbe."},
{id:"is42",r:"Isaïe 42:1-4",t:"1er chant du Serviteur",d:"~700 av.",tp:"mission",th:["serviteur","esprit","nations","douceur"],
ctx:"Dieu présente son serviteur élu, porteur de l'Esprit.",
he:"הֵן עַבְדִּי אֶתְמָךְ בּוֹ בְּחִירִי רָצְתָה נַפְשִׁי נָתַתִּי רוּחִי עָלָיו",lx:"ὁ παῖς μου ὁ ἐκλεκτός μου ἔθηκα τὸ πνεῦμά μου ἐπ᾿ αὐτόν",fr:"Voici mon serviteur en qui mon âme se complaît. J'ai mis mon Esprit sur lui.",
nt:[{r:"Matthieu 12:18-21",x:"Matthieu cite intégralement."},{r:"Matthieu 3:17",x:"La voix au baptême reprend les termes."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,9,3",t:"Le Serviteur est le Christ sur qui l'Esprit descend au Jourdain. Sa douceur caractérise son ministère."}],syn:"Le premier chant annonce le baptême et le style du ministère : douceur, patience, justice."},
{id:"is50",r:"Isaïe 50:6",t:"Frappé et conspué",d:"~700 av.",tp:"passion",th:["passion","obéissance"],
ctx:"Le Serviteur offre volontairement son dos aux coups et ses joues aux crachats.",
he:"גֵּוִי נָתַתִּי לְמַכִּים וּלְחָיַי לְמֹרְטִים",lx:"τὸν νῶτόν μου δέδωκα εἰς μάστιγας",fr:"J'ai livré mon dos à ceux qui me frappaient… je n'ai pas dérobé mon visage aux crachats.",
nt:[{r:"Matthieu 26:67",x:"Ils lui crachèrent au visage et le frappèrent."},{r:"Marc 14:65",x:"Crachats et gifles."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Isaïe (fragments)",t:"J'ai livré — le caractère volontaire. Le Serviteur s'offre librement, comme le Christ."}],syn:"Le caractère volontaire des souffrances. Chaque détail correspond aux outrages de la Passion."},
{id:"is53",r:"Isaïe 52:13—53:12",t:"Le Serviteur souffrant",d:"~700 av.",tp:"passion",th:["serviteur souffrant","passion","sacrifice","expiation","agneau"],
ctx:"Sommet de la prophétie messianique. Le Serviteur porte nos souffrances, est offert en sacrifice, puis exalté.",
he:"נִבְזֶה וַחֲדַל אִישִׁים … חֳלָיֵנוּ הוּא נָשָׂא … כַּשֶּׂה לַטֶּבַח יוּבָל",
lx:"οὗτος τὰς ἁμαρτίας ἡμῶν φέρει … ὡς πρόβατον ἐπὶ σφαγὴν ἤχθη",
fr:"Méprisé… Ce sont nos souffrances qu'il a portées… Comme un agneau mené à la boucherie.",
nt:[{r:"Actes 8:32-35",x:"Philippe identifie le Serviteur avec Jésus."},{r:"1 Pierre 2:24",x:"Il a porté nos péchés sur le bois."},{r:"Romains 4:25",x:"Livré pour nos offenses."}],
pa:[{a:"Irénée",d:"~180",w:"Démonstration §§68-69 ; Contre les hérésies IV,33",t:"Ce sont NOS langueurs qu'il a portées. Chaque détail correspond à la Passion."},{a:"Chrysostome",d:"~390",w:"Hom. sur Is 53",t:"Il s'est livré lui-même — choix libre et souverain. Silence devant Caïphe = comme un agneau."},{a:"Augustin",d:"~420",w:"Cité de Dieu XVIII,29",t:"Le cinquième évangile. Isaïe raconte plutôt qu'il ne prédit. Sept siècles avant."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Is, V",t:"Il a pris sur lui ce qui nous appartenait pour nous donner ce qui lui appartient."},{a:"Théodoret",d:"~440",w:"Com. sur Is 53",t:"Réfute l'interprétation collective : frappé pour MON PEUPLE (v. 8) — il souffre POUR le peuple, ne peut ÊTRE le peuple."}],
syn:"Le cinquième évangile (Augustin). Chaque détail s'accomplit dans la Passion. Fondement de la théologie de la rédemption."},
{id:"is61",r:"Isaïe 61:1-2",t:"L'oint pour la bonne nouvelle",d:"~700 av.",tp:"mission",th:["onction","mission","esprit","libération"],
ctx:"L'oint de Dieu envoyé pour annoncer la bonne nouvelle aux pauvres.",
he:"רוּחַ אֲדֹנָי עָלָי יַעַן מָשַׁח יְהוָה אֹתִי לְבַשֵּׂר עֲנָוִים",lx:"Πνεῦμα κυρίου ἐπ᾿ ἐμέ, οὗ εἵνεκεν ἔχρισέν με εὐαγγελίσασθαι πτωχοῖς",fr:"L'Esprit du Seigneur est sur moi, car il m'a oint pour porter de bonnes nouvelles.",
nt:[{r:"Luc 4:18-21",x:"Jésus lit ce passage à Nazareth et déclare : Aujourd'hui cette Écriture est accomplie."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,9,3",t:"Le Christ est l'Oint par excellence (Christos = l'Oint). L'onction de l'Esprit au Jourdain accomplit Isaïe 61."},{a:"Augustin",d:"~410",w:"Sermon 61",t:"La lecture à Nazareth est le moment où le Christ révèle publiquement son identité messianique."}],syn:"Le texte que Jésus choisit pour sa déclaration d'investiture à Nazareth."},
// ── JÉRÉMIE / ÉZÉCHIEL ──
{id:"jr23",r:"Jérémie 23:5-6",t:"Le Germe juste",d:"~600 av.",tp:"royaute",th:["roi","justice","David"],
ctx:"Dieu suscitera à David un germe juste nommé L'Éternel notre justice.",
he:"וַהֲקִמֹתִי לְדָוִד צֶמַח צַדִּיק … יְהוָה צִדְקֵנוּ",lx:"ἀναστήσω τῷ Δαυιδ ἀνατολὴν δικαίαν … κύριος Ιωσεδεκ",fr:"Je susciterai à David un germe juste… On l'appellera : L'Éternel notre justice.",
nt:[{r:"Luc 1:32-33",x:"Jésus reçoit le trône de David."},{r:"1 Corinthiens 1:30",x:"Christ est notre justice."}],
pa:[{a:"Théodoret",d:"~440",w:"Com. sur Jr 23",t:"Le titre YHWH notre justice attribue le nom divin au Messie. Preuve de sa divinité."}],syn:"Le nom divin attribué au Germe davidique : preuve scripturaire de la divinité du Messie."},
{id:"jr31a",r:"Jérémie 31:15",t:"Rachel pleure ses enfants",d:"~600 av.",tp:"naissance",th:["naissance","souffrance","Bethléem"],
ctx:"Rachel, enterrée près de Bethléem, pleure ses enfants.",he:"קוֹל בְּרָמָה נִשְׁמָע … רָחֵל מְבַכָּה עַל בָּנֶיהָ",lx:"Φωνὴ ἐν Ραμα ἠκούσθη θρῆνος … Ραχηλ ἀποκλαιομένη",fr:"On entend à Rama des lamentations : Rachel pleure ses enfants.",
nt:[{r:"Matthieu 2:17-18",x:"Matthieu cite lors du massacre des innocents par Hérode."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt IX",t:"Les premiers martyrs chrétiens meurent avant même de connaître le Christ."}],syn:"Double perspective : l'exil et le massacre des innocents."},
{id:"jr31b",r:"Jérémie 31:31-34",t:"La Nouvelle Alliance",d:"~600 av.",tp:"mission",th:["alliance","cœur","pardon"],
ctx:"Dieu annonce une alliance nouvelle inscrite dans les cœurs.",
he:"וְכָרַתִּי … בְּרִית חֲדָשָׁה … נָתַתִּי אֶת תּוֹרָתִי בְּקִרְבָּם",lx:"διαθήσομαι διαθήκην καινήν … διδοὺς νόμους μου εἰς τὴν διάνοιαν αὐτῶν",fr:"Je ferai une alliance nouvelle… Je mettrai ma loi dans leur cœur.",
nt:[{r:"Luc 22:20",x:"Cette coupe est la nouvelle alliance en mon sang."},{r:"Hébreux 8:8-13",x:"Citation intégrale ; l'ancienne alliance est rendue caduque."}],
pa:[{a:"Augustin",d:"~410",w:"De l'esprit et de la lettre 19-22",t:"L'Esprit inscrit la loi dans les cœurs, non sur des tables de pierre. C'est la grâce qui transforme."},{a:"Chrysostome",d:"~390",w:"Hom. sur Hébreux XV",t:"La supériorité vient du dedans (Esprit) et non du dehors (pierre). Le Christ est médiateur d'une alliance meilleure."}],syn:"Seule mention explicite de « nouvelle alliance » dans l'AT. Fondement de la dernière Cène."},
{id:"ez34",r:"Ézéchiel 34:23-24",t:"Le Pasteur unique",d:"~580 av.",tp:"mission",th:["pasteur","David","berger"],
ctx:"Dieu promet un pasteur unique, son serviteur David.",he:"וַהֲקִמֹתִי עֲלֵיהֶם רֹעֶה אֶחָד אֵת עַבְדִּי דָוִד",lx:"ἀναστήσω ἐπ᾿ αὐτοὺς ποιμένα ἕνα τὸν δοῦλόν μου Δαυιδ",fr:"J'établirai sur elles un seul pasteur, mon serviteur David.",
nt:[{r:"Jean 10:11",x:"Je suis le bon berger."},{r:"Hébreux 13:20",x:"Le grand pasteur des brebis."}],
pa:[{a:"Augustin",d:"~420",w:"Sermon 46",t:"Le pasteur unique est le Christ. Les pasteurs humains ne sont bons qu'au service du seul Pasteur."},{a:"Grégoire de Nazianze",d:"~380",w:"Discours 2",t:"Le Christ est le Pasteur par excellence. Tout ministère en découle."}],syn:"Le Bon Berger accomplit la promesse d'un pasteur davidique unique."},
// ── DANIEL ──
{id:"dn2",r:"Daniel 2:34-35,44",t:"La pierre qui remplit la terre",d:"~550 av.",tp:"royaute",th:["royaume","messie","victoire"],
ctx:"Une pierre détachée sans main humaine frappe la statue et remplit la terre.",he:"אֶבֶן דִּי הִתְגְּזֶרֶת דִּי לָא בִידַיִן",lx:"λίθος ἐτμήθη ἐξ ὄρους ἄνευ χειρῶν",fr:"Une pierre se détacha sans le secours d'aucune main.",
nt:[{r:"Luc 20:18",x:"Quiconque tombera sur cette pierre s'y brisera."},{r:"Éphésiens 2:20",x:"Pierre angulaire de l'édifice de Dieu."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,21,7",t:"La pierre sans main humaine = naissance virginale. Son royaume remplace tous les empires."},{a:"Chrysostome",d:"~390",w:"Hom. sur Daniel",t:"La pierre est le Christ, la montagne est son Église."}],syn:"Figure de l'Incarnation virginale et du Royaume universel du Christ."},
{id:"dn7",r:"Daniel 7:13-14",t:"Le Fils de l'homme",d:"~550 av.",tp:"royaute",th:["roi","fils de l'homme","parousie"],
ctx:"Sur les nuées du ciel vient un fils d'homme recevant un règne éternel.",
he:"עִם עֲנָנֵי שְׁמַיָּא כְּבַר אֱנָשׁ אָתֵה הֲוָה … שָׁלְטָן עָלַם",lx:"ἐπὶ τῶν νεφελῶν ὡς υἱὸς ἀνθρώπου … ἐξουσία αἰώνιος",fr:"Sur les nuées venait comme un fils d'homme… Sa domination est éternelle.",
nt:[{r:"Matthieu 26:64",x:"Jésus au Sanhédrin s'identifie au Fils de l'homme."},{r:"Matthieu 24:30",x:"Retour glorieux sur les nuées."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies IV,20,11",t:"Fils de l'homme = humanité. Nuées = divinité. Les deux natures dans une vision."},{a:"Athanase",d:"~356",w:"Contre les Ariens II,11",t:"Un règne éternel ne peut appartenir à une créature. Argument anti-arien."},{a:"Chrysostome",d:"~390",w:"Hom. sur Mt LXXVI",t:"Devant le Sanhédrin, Jésus affirme sa divinité. Le grand prêtre comprend : Blasphème ! L'ironie : le jugé est le Juge."}],syn:"Source du titre Fils de l'homme. Humanité et divinité réunies, annonce de la Parousie."},
{id:"dn9",r:"Daniel 9:24-27",t:"Les 70 semaines",d:"~550 av.",tp:"mission",th:["chronologie","messie","temple"],
ctx:"Gabriel révèle 490 ans pour l'onction du Messie, qui sera retranché avant la destruction du Temple.",
he:"שָׁבֻעִים שִׁבְעִים נֶחְתַּךְ … לִמְשֹׁחַ קֹדֶשׁ קָדָשִׁים",lx:"ἑβδομήκοντα ἑβδομάδες … τοῦ χρῖσαι ἅγιον ἁγίων",fr:"70 semaines sont fixées… pour oindre le Saint des Saints. Le Messie sera retranché.",
nt:[{r:"Marc 1:15",x:"Les temps sont accomplis."},{r:"Luc 3:1",x:"Le ministère commence au temps des 70 semaines."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies V,25,4",t:"Le Christ est venu au temps fixé par Daniel."},{a:"Augustin",d:"~420",w:"Cité de Dieu XVIII,54",t:"Le Messie doit être retranché AVANT la destruction du Temple (70 ap. J.-C.). Argument chronologique décisif."}],syn:"Le Messie devait venir et mourir AVANT la destruction du Second Temple. Borne supérieure indépassable."},
// ── OSÉE / JOËL ──
{id:"os11",r:"Osée 11:1",t:"Appelé hors d'Égypte",d:"~750 av.",tp:"naissance",th:["naissance","exode","Égypte"],
ctx:"D'Égypte j'ai appelé mon fils.",he:"וּמִמִּצְרַיִם קָרָאתִי לִבְנִי",lx:"ἐξ Αἰγύπτου μετεκάλεσα τὰ τέκνα αὐτοῦ",fr:"J'ai appelé mon fils hors d'Égypte.",
nt:[{r:"Matthieu 2:15",x:"Matthieu cite quand la Sainte Famille revient d'Égypte."}],
pa:[{a:"Irénée",d:"~180",w:"Démonstration 20",t:"Le Christ récapitule l'histoire d'Israël : descente en Égypte, retour, Jourdain, désert."},{a:"Augustin",d:"~420",w:"Contre Fauste XII,30",t:"Le sens historique ET typologique sont vrais. Le premier est la figure, le second la réalité."}],syn:"Le Christ récapitule l'Exode d'Israël."},
{id:"jl3",r:"Joël 3:1-5",t:"Effusion de l'Esprit",d:"~800 av.",tp:"mission",th:["esprit","pentecôte","prophétie"],
ctx:"Dieu répand son Esprit sur toute chair.",he:"אֶשְׁפּוֹךְ אֶת רוּחִי עַל כָּל בָּשָׂר",lx:"ἐκχεῶ ἀπὸ τοῦ πνεύματός μου ἐπὶ πᾶσαν σάρκα",fr:"Je répandrai mon Esprit sur toute chair.",
nt:[{r:"Actes 2:16-21",x:"Pierre cite Joël à la Pentecôte."}],
pa:[{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Joël 3:1",t:"La Pentecôte accomplit cette prophétie. L'universalité (toute chair) marque la transition des Alliances."},{a:"Basile",d:"~370",w:"Traité du Saint-Esprit XVI",t:"Le Christ envoie l'Esprit après son Ascension, accomplissant Joël."}],syn:"La Pentecôte accomplit Joël. L'Esprit s'étend universellement."},
// ── MICHÉE / ZACHARIE / MALACHIE ──
{id:"mi5",r:"Michée 5:1",t:"Né à Bethléem",d:"~700 av.",tp:"naissance",th:["naissance","bethléem","éternité"],
ctx:"Le chef d'Israël naîtra à Bethléem ; ses origines remontent à l'éternité.",
he:"וְאַתָּה בֵּית לֶחֶם אֶפְרָתָה … וּמוֹצָאֹתָיו מִקֶּדֶם מִימֵי עוֹלָם",lx:"σύ Βηθλεεμ … αἱ ἔξοδοι αὐτοῦ ἀπ᾿ ἀρχῆς ἐξ ἡμερῶν αἰῶνος",fr:"Et toi Bethléem, de toi sortira celui dont les origines remontent à l'éternité.",
nt:[{r:"Matthieu 2:1-6",x:"Les scribes citent Michée."},{r:"Jean 7:42",x:"Le Christ doit venir de Bethléem."}],
pa:[{a:"Justin",d:"~155",w:"Dialogue 78",t:"Même les adversaires ne contestent pas le lieu de naissance."},{a:"Grégoire de Nysse",d:"~385",w:"Contre Eunome III,1",t:"Les origines éternelles affirment la préexistence divine. Né dans le temps, existant de toute éternité."}],syn:"Lieu vérifiable + origines éternelles. Homme et Dieu."},
{id:"za9",r:"Zacharie 9:9",t:"Le Roi sur un âne",d:"~520 av.",tp:"mission",th:["roi","humilité","rameaux"],
ctx:"Le roi messianique entre à Jérusalem humble, sur un âne.",
he:"הִנֵּה מַלְכֵּךְ יָבוֹא לָךְ צַדִּיק וְנוֹשָׁע הוּא עָנִי וְרֹכֵב עַל חֲמוֹר",lx:"ἰδοὺ ὁ βασιλεύς σου ἔρχεταί σοι δίκαιος καὶ σῴζων πραῢς καὶ ἐπιβεβηκὼς ἐπὶ ὑποζύγιον",fr:"Ton roi vient à toi, juste et humble, monté sur un âne.",
nt:[{r:"Matthieu 21:4-5",x:"Entrée des Rameaux."},{r:"Jean 12:14-15",x:"Jean cite aussi."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt LXVI",t:"Un âne, non un cheval de guerre : ce roi conquiert par la douceur."},{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Za 9:9",t:"L'ânesse = les païens ; l'ânon = les Juifs : le Christ les unit dans l'Église."}],syn:"Accompli aux Rameaux avec une précision frappante. Contraste avec un messie guerrier."},
{id:"za11",r:"Zacharie 11:12-13",t:"Les 30 pièces d'argent",d:"~520 av.",tp:"passion",th:["passion","trahison","argent"],
ctx:"Le prophète reçoit 30 pièces, les jette au potier dans le Temple.",
he:"וַיִּשְׁקְלוּ אֶת שְׂכָרִי שְׁלֹשִׁים כָּסֶף … וָאַשְׁלִיךְ אֹתוֹ אֶל הַיּוֹצֵר",lx:"ἔστησαν τὸν μισθόν μου τριάκοντα ἀργυροῦς",fr:"Ils pesèrent 30 pièces d'argent… je les jetai au potier dans la maison de l'Éternel.",
nt:[{r:"Matthieu 26:15",x:"Judas reçoit 30 pièces."},{r:"Matthieu 27:3-10",x:"Judas rend l'argent ; achat du champ du potier."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies IV,33,12",t:"Le prix de 30 pièces (prix d'un esclave) est le prix auquel le Seigneur de gloire a été vendu."},{a:"Augustin",d:"~420",w:"Cité de Dieu XVII,19",t:"Trois détails accomplis à la lettre : le montant, le Temple, le potier."}],syn:"Précision remarquable : montant exact, Temple, champ du potier."},
{id:"za12",r:"Zacharie 12:10",t:"Celui qu'ils ont percé",d:"~520 av.",tp:"passion",th:["passion","croix","parousie"],
ctx:"Jérusalem regardera vers celui qu'ils ont percé.",he:"וְהִבִּיטוּ אֵלַי אֵת אֲשֶׁר דָּקָרוּ",lx:"ἐπιβλέψονται πρός με ἀνθ᾿ ὧν κατωρχήσαντο",fr:"Ils regarderont vers moi, celui qu'ils ont percé.",
nt:[{r:"Jean 19:34-37",x:"Le côté percé."},{r:"Apocalypse 1:7",x:"Tout œil le verra."}],
pa:[{a:"Cyrille d'Alexandrie",d:"~430",w:"Com. sur Zacharie 12",t:"Le texte dit vers MOI — YHWH est percé. C'est Dieu incarné sur la croix."},{a:"Augustin",d:"~420",w:"Traités sur Jean CXX,2",t:"Du côté jaillissent sang et eau : Eucharistie et Baptême. L'Église naît du côté du Christ."}],syn:"YHWH percé. Double accomplissement : crucifixion et Parousie."},
{id:"za13",r:"Zacharie 13:7",t:"Le berger frappé",d:"~520 av.",tp:"passion",th:["passion","berger","dispersion"],
ctx:"Dieu commande de frapper le berger ; les brebis seront dispersées.",he:"הַךְ אֶת הָרֹעֶה וּתְפוּצֶיןָ הַצֹּאן",lx:"πατάξατε τὸν ποιμένα καὶ ἐκσπασθήσεται τὰ πρόβατα",fr:"Frappe le berger, et les brebis seront dispersées.",
nt:[{r:"Matthieu 26:31",x:"Jésus cite à Gethsémani."},{r:"Marc 14:27",x:"Marc rapporte aussi."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt LXXXIII",t:"La fuite des disciples était prévue. Le berger frappé = le Christ ; les brebis dispersées = les apôtres."}],syn:"L'abandon des disciples était dans le plan divin."},
{id:"ml3a",r:"Malachie 3:1",t:"Le messager et le Seigneur au Temple",d:"~450 av.",tp:"mission",th:["précurseur","temple","messie"],
ctx:"Un messager prépare le chemin, puis le Seigneur entre soudain dans son Temple.",
he:"הִנְנִי שֹׁלֵחַ מַלְאָכִי וּפִנָּה דֶרֶךְ לְפָנָי וּפִתְאֹם יָבוֹא אֶל הֵיכָלוֹ הָאָדוֹן",lx:"ἰδοὺ ἐξαποστέλλω τὸν ἄγγελόν μου … ἐξαίφνης ἥξει εἰς τὸν ναὸν ἑαυτοῦ κύριος",fr:"Voici, j'envoie mon messager. Et soudain le Seigneur entrera dans son Temple.",
nt:[{r:"Matthieu 11:10",x:"Jésus applique à Jean-Baptiste."},{r:"Marc 1:2",x:"Marc ouvre par cette citation."}],
pa:[{a:"Irénée",d:"~180",w:"Contre les hérésies III,11,4",t:"Le messager est Jean-Baptiste ; le Seigneur au Temple est le Christ."},{a:"Chrysostome",d:"~390",w:"Hom. sur Mt XXXVII",t:"Le Christ entre comme Seigneur et chasse les marchands avec autorité divine."}],syn:"Double volet : Jean-Baptiste (messager) et le Christ (Seigneur). Le Temple devait encore exister."},
{id:"ml3b",r:"Malachie 3:23-24",t:"Le retour d'Élie",d:"~450 av.",tp:"mission",th:["précurseur","Élie","jugement"],
ctx:"Dieu enverra Élie avant le jour grand et redoutable.",he:"הִנֵּה אָנֹכִי שֹׁלֵחַ לָכֶם אֵת אֵלִיָּה הַנָּבִיא",lx:"ἰδοὺ ἐγὼ ἀποστέλλω ὑμῖν Ηλιαν τὸν Θεσβίτην",fr:"Voici, je vous enverrai Élie le prophète.",
nt:[{r:"Matthieu 17:10-13",x:"Jésus identifie Jean-Baptiste à Élie."},{r:"Luc 1:17",x:"Jean viendra avec l'esprit et la puissance d'Élie."}],
pa:[{a:"Chrysostome",d:"~390",w:"Hom. sur Mt LVII",t:"Jean-Baptiste est l'Élie de la première venue. Un second Élie viendra avant la Parousie. Double accomplissement."}],syn:"Jean-Baptiste = Élie de la 1ère venue. Un 2nd Élie = avant la Parousie."},
];

/*══════════════════════════════════════════════════════════════
  35 REFUTATIONS — PATRISTIQUE + ISLAMIQUE + TALMUDIQUE
══════════════════════════════════════════════════════════════*/
const R=[
// ── EXÉGÈSE ──
{id:"r1",cat:"Exégèse",ob:"Isaïe 53 décrit Israël souffrant, pas un individu.",src:"Rachi (XIe s.) ; objection rabbinique",rep:"Théodoret (Com. sur Is 53) : le Serviteur souffre pour les péchés de MON PEUPLE (v. 8) — il souffre POUR le peuple, ne peut ÊTRE le peuple. Justin (Dialogue 13) : le singulier comme un agneau exclut un collectif. Augustin (Cité de Dieu XVIII,29) : la sépulture avec le riche = Joseph d'Arimathie. Origène (Contra Celsum I,55) : le Targum Jonathan lit ce passage comme messianique, preuve que l'interprétation collective est tardive.",pe:["Théodoret, Com. Is 53","Justin, Dialogue 13","Augustin, Cité de Dieu XVIII,29","Origène, Contra Celsum I,55"]},
{id:"r2",cat:"Exégèse",ob:"Almah (Is 7:14) signifie jeune femme, pas vierge.",src:"Tryphon (IIe s.)",rep:"Justin (Dialogue 43-44, 66-68) et Irénée (Contre les hérésies III,21) : (1) La Septante (IIIe s. av. J.-C., érudits juifs) choisit PARTHENOS — témoignage pré-chrétien. (2) Aquila et Théodotion changent le mot APRÈS le Christ. (3) Un signe doit être surnaturel. Athanase (De l'Incarnation 33) : Emmanuel implique naissance surnaturelle.",pe:["Justin, Dialogue 43-44","Irénée, Contre les hérésies III,21","Athanase, De l'Incarnation 33"]},
{id:"r3",cat:"Exégèse",ob:"Le Psaume 22 n'est pas messianique : David parle de lui-même.",src:"Rationalisme",rep:"Théodoret : le percement des mains décrit une crucifixion inexistante au Xe s. av. J.-C. Le tirage au sort ne correspond à rien chez David. La conversion universelle (v. 28) ne s'est jamais réalisée pour David. Augustin (Enarrationes 21) : le mouvement souffrance→louange ne vise que le Christ.",pe:["Théodoret, Com. Ps 21","Augustin, Enarrationes 21"]},
{id:"r4",cat:"Exégèse",ob:"Les évangélistes citent l'AT hors contexte.",src:"Celse (IIe s.) ; critique moderne",rep:"Justin (Dialogue 32-39) : les prophéties étaient messianiques AVANT le Christ. Irénée (Contre les hérésies IV,26) : la typologie est le mode normal de l'Écriture. Origène (Contra Celsum I,50) : 40+ prophéties indépendantes sur 1000 ans rendent la fabrication absurde. Augustin : le sens littéral ET plénier sont vrais.",pe:["Justin, Dialogue 32-39","Irénée, Contre les hérésies IV,26","Origène, Contra Celsum I,50"]},
{id:"r5",cat:"Exégèse",ob:"Mt 27:9 attribue à Jérémie une citation de Zacharie.",src:"Porphyre (IIIe s.)",rep:"Augustin (De consensu Ev. III,29-30) et Jérôme (Com. sur Mt 27:9) : Jérémie est premier du recueil prophétique ; le passage combine Za 11:12-13 et Jr 32:6-15. L'accomplissement lui-même est exact.",pe:["Augustin, De consensu Ev. III,29","Jérôme, Com. Mt 27:9"]},
{id:"r6",cat:"Exégèse",ob:"Les généalogies de Matthieu et Luc se contredisent.",src:"Porphyre",rep:"Augustin (De consensu Ev. II,3-4) : Matthieu = lignée légale de Joseph (par Salomon) ; Luc = lignée de Marie (par Nathan). Les deux convergent vers David. La loi du lévirat (Dt 25:5) explique les divergences apparentes.",pe:["Augustin, De consensu Ev. II,3-4","Chrysostome, Hom. sur Mt I"]},
{id:"r7",cat:"Exégèse",ob:"Osée 11:1 parle d'Israël, pas du Christ.",src:"Critique exégétique",rep:"Irénée (Démonstration 20) : le Christ récapitule l'histoire d'Israël. Augustin (Contre Fauste XII,30) : le sens historique ET typologique sont vrais. Le premier est la figure, le second la réalité.",pe:["Irénée, Démonstration 20","Augustin, Contre Fauste XII,30"]},
// ── MESSIANISME ──
{id:"r8",cat:"Messianisme",ob:"Jésus n'a pas accompli les prophéties politiques.",src:"Objection messianique traditionnelle",rep:"Justin (1ère Apologie 52) : DEUX VENUES. Daniel 9:24-27 fixe le Messie AVANT la destruction du Temple (70 ap. J.-C.). Genèse 49:10 : le sceptre quitte Juda quand Shiloh vient. Augustin (Cité de Dieu XVIII,54) : Temple détruit + sceptre parti = le Messie est déjà venu.",pe:["Justin, 1ère Apologie 52","Augustin, Cité de Dieu XVIII,54"]},
{id:"r9",cat:"Messianisme",ob:"Daniel 9 (les 70 semaines) ne prédit pas le Christ.",src:"Objection rabbinique",rep:"Augustin (Cité de Dieu XVIII,54) : le Messie sera retranché et le Temple détruit (Dn 9:26). Cela est arrivé en 70 ap. J.-C. Donc le Messie vient AVANT 70. L'argument est une borne supérieure, indépendante du calcul exact.",pe:["Augustin, Cité de Dieu XVIII,54","Irénée, Contre les hérésies V,25,4"]},
{id:"r10",cat:"Messianisme",ob:"Les prophéties sont vagues et s'appliquent à n'importe qui.",src:"Scepticisme",rep:"Origène (Contra Celsum I,50) : l'accumulation de conditions précises — Bethléem, vierge, Juda, David, avant le Temple détruit, Galilée, âne, 30 pièces, mains percées, os intacts, sépulture chez un riche — réduit la probabilité à zéro. Justin : auteurs différents sur 1000 ans.",pe:["Origène, Contra Celsum I,50","Justin, Dialogue 32-39"]},
{id:"r11",cat:"Messianisme",ob:"Jésus, né d'une vierge, ne peut descendre de David.",src:"Objection rabbinique",rep:"Irénée et Augustin (Contra Fauste XXIII) : la descendance passe par Marie (Luc 3:23-38). Joseph assure les droits légaux. La Loi reconnaît la filiation juridique.",pe:["Irénée, Contre les hérésies III,21,5-9","Augustin, Contra Fauste XXIII"]},
{id:"r12",cat:"Messianisme",ob:"Le Psaume 110 n'est pas messianique.",src:"Critique exégétique",rep:"Le Christ réfute directement (Mt 22:41-46). Augustin (Enarrationes 109) : aucun roi n'a été prêtre selon Melchisédech. Cyrille : siège à ma droite = partage du trône divin.",pe:["Augustin, Enarrationes 109","Cyrille, Com. Ps 109"]},
// ── THÉOLOGIE ──
{id:"r13",cat:"Théologie",ob:"La Trinité est polythéiste.",src:"Judaïsme ; Islam (Coran 4:171 ; 5:73)",rep:"Athanase et les Cappadociens : Ps 110 (deux Seigneurs), Is 48:16 (trois personnes), Gn 1:26 (pluriel). Grégoire de Nazianze (Discours 31) : un seul Dieu en trois hypostases. Basile (Contre Eunome II) : l'unité de substance préserve le monothéisme. Réponse à l'Islam : le Coran 5:73 réfute un trithéisme (Père, Marie, Jésus) que les chrétiens n'ont JAMAIS enseigné. La Trinité n'est pas trois dieux mais un Dieu en trois Personnes.",pe:["Athanase, Contre les Ariens I-III","Basile, Contre Eunome II","Grégoire de Nazianze, Discours 31","Jean Damascène, De la foi orthodoxe I,8 (réponse à l'Islam)"]},
{id:"r14",cat:"Théologie",ob:"Dieu ne peut pas souffrir ni mourir.",src:"Celse ; philosophie néoplatonicienne ; Islam (Coran 4:157)",rep:"Athanase (De l'Incarnation 1-10) : il serait absurde que Dieu laisse sa création périr sans intervenir. Grégoire de Nazianze (Lettre 101) : ce qui n'est pas assumé n'est pas guéri. Cyrille (12 anathèmes, Éphèse 431) : la Personne du Verbe souffre dans sa nature humaine. Réponse à l'Islam : le Coran 4:157 affirme que Jésus n'a pas été crucifié. Mais c'est un texte du VIIe s. contredisant des sources du Ier s. (Tacite, Josèphe, Paul, Évangiles). Jean Damascène (De haeresibus 101) est le premier Père à répondre directement à l'Islam.",pe:["Athanase, De l'Incarnation 1-10","Grégoire de Nazianze, Lettre 101","Cyrille, 12 anathèmes","Jean Damascène, De haeresibus 101"]},
{id:"r15",cat:"Théologie",ob:"Jésus n'a jamais prétendu être Dieu. Invention de Paul ou Nicée.",src:"Arianisme ; critique libérale ; Islam (Coran 5:116-117)",rep:"Athanase (Contre les Ariens I,37-42) : Jn 10:30 Moi et le Père un ; Jn 8:58 Avant Abraham JE SUIS. Ignace d'Antioche (~107), disciple direct des apôtres, appelle Jésus « notre Dieu ». Nicée n'a pas inventé mais défini. Réponse à l'Islam : le Coran 5:116 met dans la bouche de Jésus un déni d'avoir dit « adorez-moi et ma mère ». Mais aucun chrétien n'enseigne l'adoration de Marie comme divinité. L'objection coranique vise une hérésie (les collyridiens) et non l'orthodoxie chrétienne.",pe:["Athanase, Contre les Ariens I,37-42","Ignace, Lettre aux Éphésiens 18","Jean Damascène, De haeresibus 101"]},
{id:"r16",cat:"Théologie",ob:"Le péché originel est injuste.",src:"Pélage (Ve s.)",rep:"Augustin (De natura et gratia) : non pas punition mais blessure héritée. La solidarité permet la Rédemption : en Adam tous meurent, en Christ tous vivent (1 Co 15:22). Irénée (Contre les hérésies III,18,7) : la récapitulation guérit ce qu'Adam a blessé.",pe:["Augustin, De natura et gratia","Irénée, Contre les hérésies III,18,7"]},
{id:"r17",cat:"Théologie",ob:"L'expiation substitutive est immorale.",src:"Critique morale",rep:"Irénée et Athanase : le Christ assume la nature humaine et la guérit de l'intérieur. Grégoire de Nazianze (Discours 45) rejette la rançon au diable : c'est la victoire sur la mort. Augustin (De Trinitate XIII) : c'est l'amour, non la souffrance, qui sauve.",pe:["Irénée, Contre les hérésies V,1","Grégoire de Nazianze, Discours 45","Augustin, De Trinitate XIII"]},
{id:"r18",cat:"Théologie",ob:"Le christianisme est exclusiviste.",src:"Pluralisme",rep:"Irénée (Contre les hérésies IV,6,7) : l'exclusivité du Christ élargit le salut. Justin (2e Apologie 13) : le Logos a semé des semences de vérité dans toutes les cultures. Augustin : la religion chrétienne existait depuis l'origine du genre humain.",pe:["Irénée, Contre les hérésies IV,6,7","Justin, 2e Apologie 13","Augustin, Retractationes I,13"]},
{id:"r19",cat:"Théologie",ob:"Si Jésus est Dieu, à qui priait-il ?",src:"Antitrinitarisme ; Islam",rep:"Athanase (Contre les Ariens III,27-29) : la prière révèle la distinction des Personnes. Le Fils prie dans sa nature humaine. Grégoire de Nazianze (Discours 30) : Gethsémani montre deux volontés dans l'unité de la Personne. Cyrille (Com. sur Jn 17) : Jésus prie POUR NOUS.",pe:["Athanase, Contre les Ariens III,27-29","Grégoire de Nazianze, Discours 30","Cyrille, Com. Jean 17"]},
{id:"r20",cat:"Théologie",ob:"Le Dieu de l'AT est violent, incompatible avec le NT.",src:"Marcion ; gnosticisme",rep:"Irénée (Contre les hérésies IV-V) : c'est le MÊME Dieu. Justice et miséricorde se complètent. Augustin (Contre Fauste XXII) : pédagogie divine progressive. Le Dieu du NT est aussi Juge (Mt 25) ; celui de l'AT est aussi miséricordieux (Ex 34:6).",pe:["Irénée, Contre les hérésies IV-V","Augustin, Contre Fauste XXII"]},
{id:"r21",cat:"Théologie",ob:"La souffrance prouve que Dieu n'existe pas.",src:"Épicure ; théodicée",rep:"Augustin (Confessions VII ; Cité de Dieu XI-XII) : le mal est privation de bien. La liberté implique le mal possible. Irénée (Contre les hérésies IV,37-39) : pédagogie divine. Le Christ souffrant entre dans la douleur humaine.",pe:["Augustin, Confessions VII","Irénée, Contre les hérésies IV,37-39"]},
// ── HISTOIRE ──
{id:"r22",cat:"Histoire",ob:"La résurrection n'a pas eu lieu.",src:"Matérialisme ; Talmud (Sanhédrin 43a allègue que les disciples ont volé le corps)",rep:"Chrysostome (Hom. 1 Co XXXVIII) : des pêcheurs peureux n'affrontent pas la mort pour un mensonge connu d'eux. Augustin (Cité de Dieu XXII,5) : le christianisme s'est répandu sans armée — absurde si mensonge. Athanase (De l'Incarnation 28-31) : la mort du Christ a détruit la peur de la mort chez les disciples. Réponse au Talmud : la garde romaine (Mt 27:62-66) rend le vol impossible ; les disciples n'avaient aucun motif — le mensonge leur a valu persécution et mort.",pe:["Chrysostome, Hom. 1 Co XXXVIII","Augustin, Cité de Dieu XXII,5","Athanase, De l'Incarnation 28-31"]},
{id:"r23",cat:"Histoire",ob:"Le christianisme emprunte au paganisme.",src:"Celse ; syncrétisme (XIXe s.)",rep:"Justin (1ère Apologie 54) : contrefaçons diaboliques. Irénée (Contre les hérésies II,14) : parallèles superficiels — Osiris ne ressuscite pas corporellement, Mithra n'est pas historique. Augustin (Cité de Dieu XVIII,37) : mythe = cyclique et atemporel ; Évangile = historique, sous Ponce Pilate. Origène : aucun mythe attesté par des martyrs.",pe:["Justin, 1ère Apologie 54","Irénée, Contre les hérésies II,14","Augustin, Cité de Dieu XVIII,37"]},
{id:"r24",cat:"Histoire",ob:"Les Évangiles sont tardifs et peu fiables.",src:"Critique rationaliste",rep:"Irénée (Contre les hérésies III,1) : chaîne Irénée→Polycarpe→Jean. Papias (~110) atteste la composition du vivant des témoins. Même Celse (IIe s.) ne nie pas les miracles mais les attribue à la magie — confirmant les faits (Origène, Contra Celsum I,42-47).",pe:["Irénée, Contre les hérésies III,1","Papias (via Eusèbe, H.E. III,39)","Origène, Contra Celsum I,42"]},
{id:"r25",cat:"Histoire",ob:"Paul a inventé le christianisme.",src:"Ébionisme ; critique moderne",rep:"Irénée (Contre les hérésies III,13-15) : continuité Pierre-Jacques-Jean-Paul (Gal 2:9 ; Actes 15). Paul dit : J'ai transmis ce que j'ai reçu (1 Co 15:3). Clément de Rome (~96) mentionne Pierre et Paul ensemble.",pe:["Irénée, Contre les hérésies III,13-15","Clément de Rome, Lettre aux Corinthiens"]},
{id:"r26",cat:"Histoire",ob:"Les conciles ont inventé des dogmes étrangers à l'Écriture.",src:"Protestantisme radical",rep:"Irénée (Contre les hérésies III,4) : la Tradition apostolique précède le NT. Athanase (De Decretis) : homoousios est un outil pour Jn 1:1 et Is 9:5. Basile (Du Saint-Esprit XXVII) : des dogmes viennent de l'écrit, d'autres de la tradition orale ; même autorité.",pe:["Irénée, Contre les hérésies III,4","Athanase, De Decretis","Basile, Du Saint-Esprit XXVII"]},
{id:"r27",cat:"Histoire",ob:"Les miracles sont impossibles par définition.",src:"Hume (XVIIIe s.)",rep:"Augustin (Cité de Dieu XXI,8) : nier les miracles a priori est un acte de foi naturaliste. Athanase (De l'Incarnation 18-19) : les miracles sont les signes messianiques d'Isaïe 35:5. Même Celse ne les nie pas.",pe:["Augustin, Cité de Dieu XXI,8","Athanase, De l'Incarnation 18-19"]},
// ── OBJECTIONS ISLAMIQUES ──
{id:"r28",cat:"Islam",ob:"Le Coran affirme que Jésus n'a pas été crucifié (4:157). Les chrétiens se trompent.",src:"Coran, sourate 4 (An-Nisa), 157",rep:"Jean Damascène (De haeresibus 101, VIIIe s.) est le premier Père à répondre directement à l'Islam. La crucifixion est attestée par : (1) les quatre Évangiles (témoins oculaires) ; (2) Paul (écrivant ~20 ans après) ; (3) Tacite (Annales XV,44 : « Christus, sous Ponce Pilate, subit le dernier supplice ») ; (4) Josèphe (Antiquités XVIII,3,3) ; (5) le Talmud lui-même (Sanhédrin 43a : « on a pendu Yeshu la veille de Pâque »). Le Coran (VIIe s.) est postérieur de 600 ans à cinq sources indépendantes convergeant sur la crucifixion. La thèse du shubbiha lahum (il leur a semblé) n'a aucun appui historique antérieur au VIIe siècle.",pe:["Jean Damascène, De haeresibus 101","Tacite, Annales XV,44","Josèphe, Antiquités XVIII,3,3","Talmud de Babylone, Sanhédrin 43a"]},
{id:"r29",cat:"Islam",ob:"Les Écritures chrétiennes ont été corrompues (tahrif). Le texte original a été altéré.",src:"Coran 2:75 ; 5:13 ; apologétique islamique",rep:"Jean Damascène répond le premier. (1) Le Coran lui-même cite la Torah et l'Évangile comme Parole de Dieu (3:3-4 ; 5:46-47 ; 10:94) et demande aux chrétiens de juger par leur Évangile (5:47). Si les textes étaient corrompus, le Coran ne renverrait pas à eux. (2) Les manuscrits du NT (5800+ manuscrits grecs, les plus anciens du IIe s.) et de l'AT (manuscrits de la mer Morte, IIIe-Ier s. av. J.-C.) sont antérieurs à l'Islam et concordent avec nos textes actuels. Aucune corruption massive n'est détectable. (3) La distribution géographique des manuscrits (Égypte, Syrie, Rome, Éthiopie) rend une corruption coordonnée impossible.",pe:["Jean Damascène, De haeresibus 101","Manuscrits de Qumrân (IIIe-Ier s. av. J.-C.)","Papyrus P52 (125 ap. J.-C., Jean 18)","Codex Sinaiticus (IVe s.)"]},
{id:"r30",cat:"Islam",ob:"Le Paraclet (Jean 14:16) annonce Muhammad, pas le Saint-Esprit.",src:"Apologétique islamique (Ahmad = le « loué » = Parakletos ?)",rep:"Le texte grec dit PARAKLETOS (παράκλητος, Consolateur/Avocat), non PERIKLYTOS (περίκλυτος, le loué). (1) Aucun manuscrit du NT ne porte periklytos — c'est une reconstruction spéculative. (2) Jésus décrit le Paraclet comme l'Esprit de vérité qui demeurera EN VOUS pour toujours (Jn 14:16-17) — description incompatible avec un prophète humain mortel. (3) Le Paraclet rappellera tout ce que Jésus a dit (Jn 14:26), ne parlera pas de lui-même (Jn 16:13) — incompatible avec un nouveau prophète apportant une nouvelle révélation. (4) Les Pères antérieurs à l'Islam (Irénée, Athanase, Cyrille, Augustin) identifient unanimement le Paraclet au Saint-Esprit descendu à la Pentecôte (Actes 2).",pe:["Irénée, Contre les hérésies III,17,2","Athanase, Lettres à Sérapion sur le Saint-Esprit","Cyrille d'Alexandrie, Com. sur Jean XIV","Augustin, Traités sur Jean XCIV"]},
{id:"r31",cat:"Islam",ob:"Jésus n'est qu'un prophète (nabi), pas le Fils de Dieu. Dire que Dieu a un fils est un blasphème (Coran 19:35).",src:"Coran 4:171 ; 19:35 ; 112:1-4",rep:"Jean Damascène (De fide orthodoxa I,8 ; De haeresibus 101) répond : la filiation divine n'est pas charnelle (comme le Coran semble le comprendre en 6:101 : « comment aurait-il un fils sans compagne ? »). Le Fils est le Verbe éternel de Dieu (Jean 1:1), engendré (non créé) de toute éternité. L'analogie humaine père-fils est inadéquate : il s'agit d'une relation d'origine éternelle au sein de l'essence divine. Athanase (Contre les Ariens I) : le Fils est à Dieu ce que la lumière est au soleil — même substance, même éternité. La filiation n'implique aucune division ni infériorité.",pe:["Jean Damascène, De fide orthodoxa I,8","Jean Damascène, De haeresibus 101","Athanase, Contre les Ariens I"]},
// ── OBJECTIONS TALMUDIQUES ──
{id:"r32",cat:"Talmud",ob:"Jésus était un faux prophète qui a égaré Israël (Sanhédrin 43a, 107b).",src:"Talmud de Babylone, Sanhédrin 43a, 107b ; Gittin 56b-57a",rep:"Justin (Dialogue avec Tryphon, intégral) et Origène (Contra Celsum I-II) répondent aux accusations juives. (1) Les miracles de Jésus ne sont pas de la sorcellerie mais les signes messianiques annoncés par Isaïe 35:5 — les aveugles voient, les boiteux marchent. (2) La prédication de Jésus ne contredit pas la Torah mais l'accomplit (Mt 5:17). (3) Le Talmud lui-même confirme indirectement la crucifixion (on a pendu Yeshu) et les miracles (pratiquait la sorcellerie = reconnaît les actes de puissance). (4) Le critère de Dt 18:22 (le prophète dont la parole ne s'accomplit pas) plaide pour Jésus : ses prédictions (destruction du Temple, persécution des disciples, extension à toutes les nations) se sont accomplies.",pe:["Justin, Dialogue avec Tryphon (intégral)","Origène, Contra Celsum I-II","Augustin, Contra Judaeos"]},
{id:"r33",cat:"Talmud",ob:"Le Messie doit reconstruire le Temple. Jésus ne l'a pas fait ; au contraire, le Temple a été détruit.",src:"Talmud ; attente messianique rabbinique",rep:"Justin (Dialogue 118) et Augustin (Cité de Dieu XVIII,46) : (1) La destruction du Temple en 70 est elle-même prophétisée par Jésus (Mt 24:2) et par Daniel 9:26. (2) Les prophètes annoncent un Temple nouveau, spirituel — le corps du Christ (Jn 2:19-21) et l'Église (1 Co 3:16). (3) Ézéchiel 34 et Malachie 3:1 supposent l'existence du Temple lors de la venue du Messie — le Messie devait venir AVANT sa destruction, non après. La destruction confirme donc que le Messie est déjà venu.",pe:["Justin, Dialogue 118","Augustin, Cité de Dieu XVIII,46","Irénée, Contre les hérésies V,25,4"]},
{id:"r34",cat:"Talmud",ob:"Le Messie doit rassembler les exilés d'Israël. Jésus a au contraire provoqué la dispersion.",src:"Maïmonide, Mishneh Torah, Hilkhot Melakhim 11-12",rep:"Irénée (Contre les hérésies IV,33) et Augustin (De doctrina christiana III) : le rassemblement messianique est SPIRITUEL et UNIVERSEL. Le Christ rassemble non les seuls Juifs dispersés mais TOUTES les nations dans l'Église. L'Évangile est prêché à toutes les nations (Mt 28:19), accomplissant Genèse 12:3. Augustin note que la dispersion des Juifs après 70 est elle-même providentielle : ils portent à travers le monde les Écritures qui annoncent le Christ, témoignant malgré eux de la vérité chrétienne.",pe:["Irénée, Contre les hérésies IV,33","Augustin, De doctrina christiana III","Augustin, Cité de Dieu XVIII,46"]},
{id:"r35",cat:"Talmud",ob:"Le Messie doit être un roi terrestre descendant de David par voie paternelle. Jésus ne remplit pas ces critères.",src:"Exégèse rabbinique (Rambam, etc.)",rep:"Irénée et Augustin (Contra Fauste XXIII) : (1) La descendance passe par Marie, de lignée davidique (Luc 3). Joseph assure la filiation légale. (2) Le Messie est aussi décrit comme Serviteur souffrant (Is 53), prêtre selon Melchisédech (Ps 110), et figure divine (Dn 7:13). Le réduire à un roi terrestre mutile les Écritures. (3) Le Talmud lui-même reconnaît un Messie souffrant (Mashiach ben Yosef, Sukkah 52a) à côté du Messie glorieux (Mashiach ben David). Le christianisme résout cette tension : un seul Messie, deux venues.",pe:["Irénée, Contre les hérésies III,21,5-9","Augustin, Contra Fauste XXIII","Talmud, Sukkah 52a (Mashiach ben Yosef)"]},
];

/*══════════════════════════════════════════════════════════════
  UI — ORTHODOX BYZANTINE
══════════════════════════════════════════════════════════════*/
const TM={naissance:{l:"Naissance",i:"☆",c:"#D4A84B"},mission:{l:"Mission",i:"✦",c:"#5B9E5B"},passion:{l:"Passion",i:"☩",c:"#C04040"},royaute:{l:"Royauté",i:"♚",c:"#8B6DB0"},sacerdoce:{l:"Sacerdoce",i:"⛨",c:"#D49B3C"},resurrection:{l:"Résurrection",i:"☀",c:"#D4A84B"}};
const TS=Object.keys(TM);
const ATH=[...new Set(P.flatMap(p=>p.th))].sort();
const AA=[...new Set(P.flatMap(p=>p.pa.map(x=>x.a)))].sort();
const RC=[...new Set(R.map(r=>r.cat))];

const CSS=`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Alegreya:ital,wght@0,400;0,600;1,400&family=Alegreya+SC:wght@400;500;700&family=Noto+Serif+Hebrew:wght@400;600&display=swap');
:root{--bg:#0C0A0E;--bg2:#14111A;--bg3:#1C1825;--gold:#C9A84C;--gd:#8B7335;--red2:#C44040;--cream:#E8DCC4;--text:#C8C0B4;--mut:#7A7068;--bdr:rgba(201,168,76,0.12);--bdr2:rgba(201,168,76,0.25);}
*{margin:0;padding:0;box-sizing:border-box;}::selection{background:rgba(201,168,76,0.25);}select,option{background:var(--bg2);color:var(--cream);}input::placeholder{color:var(--mut);}
@keyframes fu{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}.fu{animation:fu .4s ease forwards;}`;
const sh={fontFamily:"'Alegreya SC',serif",fontWeight:500,color:"var(--gold)",letterSpacing:"0.05em"};
const sb={fontFamily:"'Alegreya',serif",color:"var(--text)",lineHeight:1.7};
const slb={fontFamily:"'Alegreya SC',serif",fontSize:"0.65rem",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase"};
const scd={background:"var(--bg2)",border:"1px solid var(--bdr)",borderRadius:"6px"};
const sinp={background:"rgba(255,255,255,0.04)",border:"1px solid var(--bdr2)",color:"var(--cream)",borderRadius:"4px",fontFamily:"'Alegreya',serif",fontSize:"0.9rem",padding:"0.55rem 0.85rem",outline:"none",width:"100%"};
const ssel={background:"var(--bg2)",border:"1px solid var(--bdr2)",color:"var(--cream)",borderRadius:"4px",fontFamily:"'Alegreya',serif",fontSize:"0.85rem",padding:"0.5rem 0.75rem"};
function bt(a){return{background:a?"rgba(201,168,76,0.15)":"transparent",border:`1px solid ${a?"var(--gd)":"var(--bdr)"}`,color:a?"var(--gold)":"var(--mut)",padding:"0.4rem 0.9rem",borderRadius:"3px",cursor:"pointer",fontFamily:"'Alegreya SC',serif",fontSize:"0.75rem",letterSpacing:"0.05em",transition:"all 0.2s"};}
function tg(c){return{background:`${c}18`,color:c,padding:"0.1rem 0.45rem",borderRadius:"2px",fontSize:"0.65rem",fontFamily:"'Alegreya SC',serif",letterSpacing:"0.05em"};}

function Nav({v,go}){return(
<nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 1.5rem",background:"linear-gradient(135deg,#0C0A0E,#1A1428)",borderBottom:"1px solid var(--bdr2)",position:"sticky",top:0,zIndex:100}}>
<div style={{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}} onClick={()=>go("home")}><span style={{fontSize:"1.6rem",color:"var(--gold)"}}>☩</span><div><div style={{...sh,fontSize:"1.1rem"}}>Messianic Study</div><div style={{...slb,color:"var(--mut)",fontSize:"0.55rem"}}>Prophéties · Patristique · Apologie</div></div></div>
<div style={{display:"flex",gap:"0.2rem",flexWrap:"wrap"}}>{[{id:"home",l:"Accueil"},{id:"list",l:"Prophéties"},{id:"comp",l:"Comparateur"},{id:"tl",l:"Chronologie"},{id:"search",l:"Concordance"},{id:"ref",l:"Apologie"}].map(i=><button key={i.id} onClick={()=>go(i.id)} style={bt(v===i.id||(v==="det"&&i.id==="list"))}>{i.l}</button>)}</div>
</nav>);}

function Home({go,goP}){return(
<div style={{maxWidth:960,margin:"0 auto",padding:"2.5rem 1.5rem"}}>
<div className="fu" style={{textAlign:"center",marginBottom:"2rem"}}><div style={{fontSize:"3rem",color:"var(--gold)",opacity:0.8}}>☩</div><h1 style={{...sh,fontSize:"2.4rem",fontWeight:300}}>Les Prophéties Messianiques</h1><p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.1rem",fontStyle:"italic",color:"var(--mut)",margin:"0.75rem auto",maxWidth:520}}>De l'Ancien au Nouveau Testament, à la lumière des Pères de l'Église</p></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:"0.6rem",marginBottom:"2rem"}}>{[{v:"list",n:P.length+" prophéties"},{v:"comp",n:"Comparateur"},{v:"tl",n:"Chronologie"},{v:"search",n:"Concordance"},{v:"ref",n:R.length+" réfutations"}].map(c=><div key={c.v} onClick={()=>go(c.v)} style={{...scd,padding:"0.85rem",cursor:"pointer",transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--gd)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--bdr)";}}><h3 style={{...sh,fontSize:"0.9rem"}}>{c.n}</h3></div>)}</div>
<div style={{display:"flex",flexDirection:"column",gap:"0.25rem"}}>{P.map(p=>{const tm=TM[p.tp]||TM.mission;return(<div key={p.id} onClick={()=>goP(p.id)} style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.35rem 0.5rem",background:"var(--bg2)",border:"1px solid transparent",borderRadius:"3px",cursor:"pointer",transition:"all 0.12s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=tm.c+"44";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="transparent";}}><span style={{color:tm.c,width:16,textAlign:"center",fontSize:"0.75rem"}}>{tm.i}</span><span style={{...slb,color:tm.c,minWidth:55,fontSize:"0.55rem"}}>{tm.l}</span><span style={{...sh,fontSize:"0.8rem",minWidth:130}}>{p.r}</span><span style={{...sb,fontSize:"0.75rem",color:"var(--mut)",flex:1}}>{p.t}</span></div>);})}</div>
</div>);}

function PList({go,goP}){const[f,sF]=useState("all");const list=f==="all"?P:P.filter(p=>p.tp===f);return(
<div style={{maxWidth:1000,margin:"0 auto",padding:"2rem 1.5rem"}}><h2 style={{...sh,fontSize:"1.4rem",marginBottom:"0.75rem"}}>☩ {P.length} Prophéties</h2>
<div style={{display:"flex",gap:"0.25rem",marginBottom:"1.25rem",flexWrap:"wrap"}}><button onClick={()=>sF("all")} style={bt(f==="all")}>Toutes</button>{TS.filter(t=>P.some(p=>p.tp===t)).map(t=><button key={t} onClick={()=>sF(t)} style={{...bt(f===t),color:f===t?TM[t].c:"var(--mut)"}}>{TM[t].i} {TM[t].l}</button>)}</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"0.6rem"}}>{list.map(p=>{const tm=TM[p.tp]||TM.mission;return(<div key={p.id} onClick={()=>goP(p.id)} style={{...scd,padding:"0.85rem",cursor:"pointer",borderLeft:`3px solid ${tm.c}`,transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.background="var(--bg3)";}} onMouseLeave={e=>{e.currentTarget.style.background="var(--bg2)";}}><span style={tg(tm.c)}>{tm.i} {tm.l}</span><h3 style={{...sh,fontSize:"0.9rem",marginTop:"0.25rem"}}>{p.r}</h3><p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"0.8rem",fontStyle:"italic",color:"var(--mut)"}}>{p.t}</p></div>);})}</div>
</div>);}

function Det({id,go}){const p=P.find(x=>x.id===id);const[tab,sT]=useState("texts");if(!p)return null;const tm=TM[p.tp]||TM.mission;return(
<div style={{maxWidth:860,margin:"0 auto",padding:"2rem 1.5rem"}}><button onClick={()=>go("list")} style={{background:"none",border:"none",color:"var(--gold)",cursor:"pointer",fontFamily:"'Alegreya',serif",fontSize:"0.85rem",marginBottom:"0.75rem",padding:0}}>← Retour</button>
<span style={tg(tm.c)}>{tm.i} {tm.l}</span><h1 style={{...sh,fontSize:"1.7rem",fontWeight:400,marginTop:"0.4rem"}}>{p.r}</h1><p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",fontStyle:"italic",color:"var(--mut)"}}>{p.t} — {p.d}</p>
<div style={{...scd,padding:"0.85rem",margin:"0.85rem 0",background:"rgba(201,168,76,0.03)"}}><div style={{...slb,color:"var(--gold)",marginBottom:"0.25rem"}}>Contexte</div><p style={{...sb,fontSize:"0.83rem"}}>{p.ctx}</p></div>
<div style={{display:"flex",gap:"0.2rem",marginBottom:"1rem",borderBottom:"1px solid var(--bdr)"}}>{["texts","nt","pa"].map(x=><button key={x} onClick={()=>sT(x)} style={{background:tab===x?"rgba(201,168,76,0.1)":"transparent",border:"none",borderBottom:tab===x?"2px solid var(--gold)":"2px solid transparent",color:tab===x?"var(--gold)":"var(--mut)",padding:"0.45rem 0.85rem",cursor:"pointer",fontFamily:"'Alegreya SC',serif",fontSize:"0.75rem"}}>{x==="texts"?"Textes":x==="nt"?"NT":"Patristique"}</button>)}</div>
{tab==="texts"&&<div className="fu"><TB l="Hébreu" t={p.he} dir="rtl" f="'Noto Serif Hebrew',serif" sz="1.05rem"/><TB l="Septante (LXX)" t={p.lx} f="'Cormorant Garamond',serif" it/><TB l="Français" t={p.fr}/></div>}
{tab==="nt"&&<div className="fu">{p.nt.map((f,i)=><div key={i} style={{...scd,padding:"0.85rem",marginBottom:"0.5rem",borderLeft:"3px solid #2B6CA3"}}><h3 style={{...sh,fontSize:"0.9rem",color:"#5BA3D9"}}>📖 {f.r}</h3><p style={{...sb,fontSize:"0.83rem",marginTop:"0.3rem"}}>{f.x}</p></div>)}</div>}
{tab==="pa"&&<div className="fu">{p.pa.map((pa,i)=><div key={i} style={{...scd,padding:"0.85rem",marginBottom:"0.6rem",borderLeft:"3px solid #8B6DB0"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.3rem"}}><h3 style={{...sh,fontSize:"0.85rem",color:"#A98ED6"}}>{pa.a}</h3><span style={tg("#8B6DB0")}>{pa.d}</span></div><p style={{...slb,color:"var(--mut)",marginBottom:"0.3rem",fontSize:"0.55rem"}}>{pa.w}</p><p style={{...sb,fontSize:"0.82rem",lineHeight:1.75}}>{pa.t}</p></div>)}
<div style={{...scd,padding:"0.85rem",marginTop:"0.85rem",background:"rgba(201,168,76,0.03)"}}><div style={{...slb,color:"var(--gold)",marginBottom:"0.25rem"}}>✦ Synthèse</div><p style={{...sb,fontSize:"0.83rem"}}>{p.syn}</p></div></div>}
</div>);}
function TB({l,t,dir,f,sz,it}){return(<div style={{...scd,padding:"0.85rem",marginBottom:"0.5rem"}}><div style={{...slb,color:"var(--gold)",marginBottom:"0.3rem"}}>{l}</div><p style={{fontFamily:f||"'Alegreya',serif",fontSize:sz||"0.9rem",color:"var(--cream)",lineHeight:1.9,direction:dir||"ltr",textAlign:dir==="rtl"?"right":"left",fontStyle:it?"italic":"normal"}}>{t}</p></div>);}

function Comp(){const[s,sS]=useState(P[0].id);const p=P.find(x=>x.id===s);return(
<div style={{maxWidth:1100,margin:"0 auto",padding:"2rem 1.5rem"}}><h2 style={{...sh,fontSize:"1.4rem",marginBottom:"0.75rem"}}>⚖ Comparateur</h2>
<select value={s} onChange={e=>sS(e.target.value)} style={{...ssel,width:"100%",maxWidth:400,marginBottom:"1.25rem"}}>{P.map(p=><option key={p.id} value={p.id}>{p.r} — {p.t}</option>)}</select>
{p&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.6rem"}}><div style={{...scd,padding:"0.85rem",borderTop:"3px solid #C47832"}}><div style={{...slb,color:"#C47832",marginBottom:"0.4rem"}}>Hébreu</div><p style={{fontFamily:"'Noto Serif Hebrew',serif",fontSize:"1rem",color:"var(--cream)",lineHeight:2,direction:"rtl",textAlign:"right"}}>{p.he}</p></div><div style={{...scd,padding:"0.85rem",borderTop:"3px solid #2B6CA3"}}><div style={{...slb,color:"#2B6CA3",marginBottom:"0.4rem"}}>Septante</div><p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"0.9rem",fontStyle:"italic",color:"var(--cream)",lineHeight:1.8}}>{p.lx}</p></div><div style={{...scd,padding:"0.85rem",borderTop:"3px solid var(--gold)"}}><div style={{...slb,color:"var(--gold)",marginBottom:"0.4rem"}}>Français</div><p style={{fontFamily:"'Alegreya',serif",fontSize:"0.88rem",color:"var(--cream)",lineHeight:1.8}}>{p.fr}</p></div></div>}
</div>);}

function TL(){const evts=[{y:-1450,l:"Pentateuque",c:"#C47832"},{y:-1000,l:"David — Psaumes",c:"#C47832"},{y:-740,l:"Isaïe",c:"#C47832"},{y:-700,l:"Michée",c:"#C47832"},{y:-600,l:"Jérémie",c:"#C47832"},{y:-586,l:"Destruction 1er Temple",c:"#6B7B8D"},{y:-550,l:"Daniel",c:"#C47832"},{y:-520,l:"Zacharie, Malachie",c:"#C47832"},{y:-250,l:"Traduction LXX",c:"#6B7B8D"},{y:-4,l:"Naissance du Christ",c:"#C04040"},{y:30,l:"Passion et Résurrection",c:"#C04040"},{y:50,l:"Épîtres de Paul",c:"#2B6CA3"},{y:70,l:"Destruction 2nd Temple",c:"#6B7B8D"},{y:85,l:"Évangile de Jean",c:"#2B6CA3"},{y:155,l:"Justin Martyr",c:"#8B6DB0"},{y:180,l:"Irénée",c:"#8B6DB0"},{y:325,l:"Nicée",c:"#8B6DB0"},{y:350,l:"Athanase",c:"#8B6DB0"},{y:380,l:"Cappadociens",c:"#8B6DB0"},{y:390,l:"Chrysostome",c:"#8B6DB0"},{y:420,l:"Augustin",c:"#8B6DB0"},{y:431,l:"Éphèse (Theotokos)",c:"#8B6DB0"},{y:451,l:"Chalcédoine",c:"#8B6DB0"},{y:730,l:"Jean Damascène (vs Islam)",c:"#8B6DB0"}];return(
<div style={{maxWidth:900,margin:"0 auto",padding:"2rem 1.5rem"}}><h2 style={{...sh,fontSize:"1.4rem",marginBottom:"1rem"}}>⏳ Chronologie</h2>
<div style={{...scd,padding:"1.25rem 1.25rem 1.25rem 2.25rem",position:"relative"}}><div style={{position:"absolute",left:"1.75rem",top:"1.25rem",bottom:"1.25rem",width:"2px",background:"linear-gradient(to bottom,var(--gd)33,var(--gd)88,var(--gd)33)"}}/>
{evts.map((e,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:"0.85rem",marginBottom:"0.6rem"}}><div style={{minWidth:50,textAlign:"right",...slb,color:e.c,fontSize:"0.55rem"}}>{e.y<0?`${Math.abs(e.y)} av.`:`${e.y} ap.`}</div><div style={{width:8,height:8,borderRadius:"50%",background:e.c,border:"2px solid var(--bg2)",zIndex:2,flexShrink:0}}/><div style={{...sb,fontSize:"0.78rem"}}>{e.l}</div></div>)}</div></div>);}

function Search({goP}){const[q,sQ]=useState("");const[vs,sV]=useState("");const[th,sTh]=useState("");const[au,sA]=useState("");
const res=useMemo(()=>P.filter(p=>{const ql=q.toLowerCase(),vl=vs.toLowerCase();return(!ql||p.r.toLowerCase().includes(ql)||p.t.toLowerCase().includes(ql)||p.fr.toLowerCase().includes(ql)||p.th.some(t=>t.includes(ql))||p.pa.some(pa=>pa.a.toLowerCase().includes(ql)))&&(!vl||p.r.toLowerCase().includes(vl)||p.nt.some(f=>f.r.toLowerCase().includes(vl)))&&(!th||p.th.includes(th))&&(!au||p.pa.some(pa=>pa.a===au));}),[q,vs,th,au]);
return(
<div style={{maxWidth:1000,margin:"0 auto",padding:"2rem 1.5rem"}}><h2 style={{...sh,fontSize:"1.4rem",marginBottom:"0.75rem"}}>🔍 Concordance</h2>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",marginBottom:"0.4rem"}}><input value={q} onChange={e=>sQ(e.target.value)} placeholder="Recherche libre…" style={sinp}/><input value={vs} onChange={e=>sV(e.target.value)} placeholder="Verset (ex: Isaïe 7, Jean 19…)" style={sinp}/></div>
<div style={{display:"flex",gap:"0.4rem",marginBottom:"1rem"}}><select value={th} onChange={e=>sTh(e.target.value)} style={ssel}><option value="">Thèmes</option>{ATH.map(t=><option key={t}>{t}</option>)}</select><select value={au} onChange={e=>sA(e.target.value)} style={ssel}><option value="">Pères</option>{AA.map(a=><option key={a}>{a}</option>)}</select></div>
<p style={{...sb,fontSize:"0.75rem",color:"var(--mut)",marginBottom:"0.5rem"}}>{res.length} résultat{res.length!==1?"s":""}</p>
{res.map(p=>{const tm=TM[p.tp]||TM.mission;return(<div key={p.id} onClick={()=>goP(p.id)} style={{display:"flex",gap:"0.5rem",...scd,padding:"0.55rem",cursor:"pointer",marginBottom:"0.35rem"}}><div style={{minWidth:110}}><span style={tg(tm.c)}>{tm.i} {tm.l}</span><h3 style={{...sh,fontSize:"0.8rem",marginTop:"0.15rem"}}>{p.r}</h3></div><div style={{flex:1}}><p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"0.8rem",fontStyle:"italic",color:"var(--mut)"}}>{p.t}</p><div style={{display:"flex",gap:"0.15rem",marginTop:"0.2rem",flexWrap:"wrap"}}>{p.th.slice(0,3).map(t=><span key={t} style={tg("var(--gd)")}>{t}</span>)}</div></div></div>);})}</div>);}

function Ref(){const[open,sO]=useState(null);const[cat,sC]=useState("");const list=cat?R.filter(r=>r.cat===cat):R;return(
<div style={{maxWidth:900,margin:"0 auto",padding:"2rem 1.5rem"}}><h2 style={{...sh,fontSize:"1.4rem",marginBottom:"0.3rem"}}>⚔ {R.length} Réfutations apologétiques</h2><p style={{...sb,fontSize:"0.83rem",color:"var(--mut)",marginBottom:"0.85rem"}}>Patristique, talmudique et islamique — avec sources</p>
<div style={{display:"flex",gap:"0.25rem",marginBottom:"1rem",flexWrap:"wrap"}}><button onClick={()=>sC("")} style={bt(!cat)}>Toutes ({R.length})</button>{RC.map(c=><button key={c} onClick={()=>sC(c)} style={bt(cat===c)}>{c} ({R.filter(r=>r.cat===c).length})</button>)}</div>
{list.map(r=>{const isO=open===r.id;return(<div key={r.id} style={{...scd,overflow:"hidden",marginBottom:"0.5rem",borderColor:isO?"var(--red2)44":"var(--bdr)",transition:"border-color 0.3s"}}>
<div onClick={()=>sO(isO?null:r.id)} style={{padding:"0.75rem 0.85rem",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.6rem"}}>
<div><div style={{display:"flex",gap:"0.3rem",alignItems:"center",marginBottom:"0.15rem"}}><span style={tg(r.cat==="Islam"?"#2B8C5B":r.cat==="Talmud"?"#C47832":"var(--red2)")}>{r.cat}</span><span style={{...slb,color:"var(--mut)",fontSize:"0.5rem"}}>{r.src}</span></div><h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"0.9rem",fontWeight:600,color:"var(--cream)",lineHeight:1.35}}>{r.ob}</h3></div>
<span style={{color:"var(--gold)",fontSize:"1rem",flexShrink:0,transform:isO?"rotate(45deg)":"none",transition:"transform 0.2s"}}>✦</span></div>
{isO&&<div className="fu" style={{padding:"0 0.85rem 0.85rem",borderTop:"1px solid var(--bdr)"}}><div style={{paddingTop:"0.7rem"}}><div style={{...slb,color:"var(--gold)",marginBottom:"0.3rem"}}>☩ Réponse</div><p style={{...sb,fontSize:"0.83rem",lineHeight:1.75,marginBottom:"0.7rem"}}>{r.rep}</p><div style={{...slb,color:"var(--mut)",marginBottom:"0.2rem",fontSize:"0.5rem"}}>Sources</div>{r.pe.map((p,j)=><div key={j} style={{...sb,fontSize:"0.72rem",color:"#A98ED6"}}>📜 {p}</div>)}</div></div>}
</div>);})}</div>);}

export default function App(){
const[v,sV]=useState("home");const[sid,sSid]=useState(null);
const go=useCallback(x=>sV(x),[]);
const goP=useCallback(id=>{sSid(id);sV("det");},[]);
const pc=P.reduce((a,p)=>a+p.pa.length,0);
return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",color:"var(--text)"}}>
<Nav v={v} go={go}/>
{v==="home"&&<Home go={go} goP={goP}/>}
{v==="list"&&<PList go={go} goP={goP}/>}
{v==="det"&&<Det id={sid} go={go}/>}
{v==="comp"&&<Comp/>}
{v==="tl"&&<TL/>}
{v==="search"&&<Search goP={goP}/>}
{v==="ref"&&<Ref/>}
<footer style={{textAlign:"center",padding:"1.25rem",borderTop:"1px solid var(--bdr)",...slb,color:"var(--mut)",fontSize:"0.5rem"}}>☩ {P.length} prophéties · {pc} commentaires patristiques · {R.length} réfutations (patristique, talmudique, islamique) ☩</footer>
</div></>);}
