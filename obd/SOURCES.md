# Šaltiniai / Sources (licences verified 2026-10-16)

| Source | URL | Licence | Used for |
|---|---|---|---|
| OBDex (foerbsnavi) | https://github.com/foerbsnavi/OBDex | Data: CC0 1.0 (LICENSE-DATA, copy in LICENSE-OBDEX-DATA.txt); tooling MIT | Code list + EN titles for P0/P2/P3/B0/C0/U0/U3, cost fallback |
| fabiovila/OBDIICodes | https://github.com/fabiovila/OBDIICodes | MIT | v1 EN descriptions (now superseded by OBDex `en`) |
| mytrile/obd-trouble-codes | https://github.com/mytrile/obd-trouble-codes | MIT (provenance not stated; README links obd-codes.com) | v1 gap-fill only; superseded |
| todrobbins/dtcdb | https://github.com/todrobbins/dtcdb | MIT | v1 cross-check; superseded |

Attribution: "OBD-II DTC data: OBDex project, CC0 1.0" (ATTRIBUTION.txt). Lithuanian texts, severity, causes, checks and costs are Autolupa's own rule-based work.

Excluded (proprietary / unclear licence): obd-codes.com, engine-codes.com, Autodata, Ross-Tech wiki, python-OBD (GPL-2.0), tekseport/obd2-codes & sathya1495/obd2-dtc-database (NOASSERTION), rns4731/OBDIIPCTroubleCodes (no licence). SAE J2012 / ISO 15031-6 are paywalled and were not used directly.


## Kainos (prices_lt.json) – v2.1, 2026-10-16
Tik Lietuvos servisų kainoraščiai ir Lietuvos dalių parduotuvės (.lt). Faktinės kainos, ne tekstas, naudotos savo lentelėje.

| Raktas | URL | Tikrinta |
|---|---|---|
| akste | https://akste.lt/kainorastis | 2026-10-16 |
| autokurtas | https://www.autokurtas.lt/remonto-darbu-ikainiai/ | 2026-10-16 |
| intrac | https://www.intrac.lt/uploads/Lithuania/Kainora%C5%A1tis%202026.05.01.pdf | 2026-10-16 |
| mylas | https://mylas.lt/kainos/ | 2026-10-16 |
| dagas | https://dagas.lt/lt/servisas6/ | 2026-10-16 |
| wheelstreet | https://www.wheelstreet.lt/zodynas/egr-voztuvas | 2026-10-16 |
| avrc | https://avrc.lt/dyzeliniu-varikliu-remontas-alytuje-2026-dpf-filtrai-egr-sistemos/ | 2026-10-16 |
| avrc_k | https://avrc.lt/kainorastis/ | 2026-10-16 |
| autoara | https://autoservisas-vilniuje.lt/egr-remontas-isprogramavimas | 2026-10-16 |
| servisas555 | https://www.servisas555.lt/duslintuvas-2/ | 2026-10-16 |
| ladeira | https://ladeira.lt/autoserviso-paslaugos-kainos/ | 2026-10-16 |
| boltrama | https://www.boltrama.lt/kainos | 2026-10-16 |
| svilniuje | https://servisasvilniuje.lt/kainos | 2026-10-16 |
| tmt | https://www.tmt.lt/valdymo-bloku-remontas-kainos | 2026-10-16 |
| salditurbo | https://salditurbo.lt/turbinu-remonto-kainos/ | 2026-10-16 |
| chipt | https://chiptiuningas.lt/blog/kiek-kainuoja-patikrinti-jetta-vw-autoservise.html | 2026-10-16 |
| toptis | https://toptis.lt/automobiliu-remontas/varikliu-remontas/variklio-grandines-keitimas/ | 2026-10-16 |
| autopurkstukai | https://www.autopurkstukai.lt/kainorastis/ | 2026-10-16 |
| proservisai | https://proservisai.lt/automobiliu-remonto-kainos | 2026-10-16 |
| asv | https://www.automobiliuservisasvilniuje.lt/automobiliu-serviso-kainos | 2026-10-16 |
| motoint_cp | https://motointegrator.com/lt/lt/autoservisas/vilnius/zqd9qxw6-cp-servisas | 2026-10-16 |
| p_egrdalys | https://www.egrdalys.lt/marke/-chrysler/universalus-deguonies-daviklis-liambda-zondas-1 | 2026-10-16 |
| p_autorebus | https://www.autorebus.lt/autodalys/kuro-misinio-formavimas/ismetimo-emisijos-valdymas-2 | 2026-10-16 |
| p_adp | https://autodaliuparduotuve.lt/171-oro-srauto-matuokliai | 2026-10-16 |
| p_ad247_cat | https://autodalys247.lt/atsargines-dalys/katalizatoriaus-keitiklis-universalus.html | 2026-10-16 |
| p_rm | https://rm-autodalys.lt/oem-code/6039 | 2026-10-16 |
| p_ad247_era | https://autodalys247.lt/gamintojas/era | 2026-10-16 |
| p_ad1_abs | https://www.autodalys1.lt/katalogas/stabdziu-sistema/abs-davikliai | 2026-10-16 |
| p_ad247_th | https://autodalys247.lt/atsargines-dalys/termostatas/eps.html | 2026-10-16 |

## Silpnųjų vietų pastabos (brand_notes.json)
Faktai iš Wikipedia (CC BY-SA) straipsnių, perrašyti savais žodžiais (tekstas nekopijuotas); URL nurodyti kiekviename įraše. Recall/ADAC duomenų bazės tiesiogiai nenaudotos.

## Autoaibė (autoaibe.lt) – papildyta 2026-10-16
Svetainė apsaugota Cloudflare iššūkiu (tiesioginis curl/WebFetch – 403, apsauga neapeinama). Kainos paimtos tik iš viešų paieškos rezultatų fragmentų (Autoaibė produktų/kategorijų puslapiai); URL – prices_lt.json raktai `aa_*`.
Papildomai: autodalys247.lt EVAP vožtuvai (`p_ad247_evap1/2`).


## Išplėtimas: visi transporto tipai (2026-10-16)
| Šaltinis | URL | Licencija | Naudota |
|---|---|---|---|
| EvanL1/voltage-j1939 (src/database.rs) | https://github.com/EvanL1/voltage-j1939 | Apache-2.0 / MIT (patikrinta: LICENSE-APACHE, LICENSE-MIT) | 71 J1939 SPN numeriai, pavadinimai, vienetai → j1939_spn.json. SPN numeriai nesulyginti su SAE J1939DA. |
| FMI 0–31 lentelė | – | Parašyta savais žodžiais | j1939_fmi.json |
Atmesta: arthithadee/J1939-DBC-Database (MIT, bet tik 6 KB DBC, kilmė „derived from SAE J1939-71“ – neaiški), alperunlu/DTCparser, melquiraraujo-create/* (be licencijos), SAE J1939DA (mokamas, autorių teisės). Motociklų gamintojų kodų atvirų šaltinių nerasta (oJudgeStore/SmartGauge_for_Honda – NOASSERTION).

### Kainos (LT): sunkvežimiai, technika, motociklai, EV/hibridai
htl.lt, keliuprieziura.lt, autokurtas.lt (sunkvežimiai, žemės ūkio technika); yomoto.lt, motodiagnostika.lt, motoinn.lt, moto-baysport.lt (motociklai); autohib.lt, osw.lt, wheelstreet.lt, en.autoplius.lt (privatus skelbimas), vezejugidas.lt (HV baterijos). Atmesta: skanyx.com (ES, ne LT kainos), ironcustommotors.com (Portugalija), alwark.lt (sandėliavimo technika).
Inverterių / OBC remonto LT kainų nerasta: hibridai.lt, autoservisaivilniuje.lt, automobiliu-servisas.lt šias paslaugas teikia, bet kainų neskelbia.

### Pastabos (brand_notes.json)
Papildomi Wikipedia straipsniai (faktai savais žodžiais): Volkswagen_Transporter, Volkswagen_Crafter, Mercedes-Benz_Sprinter, Mercedes-Benz_Vito, Mercedes-Benz_OM642_engine, Ford_Transit, Ford_Duratorq_engine, Renault_Master, Renault_Trafic, Opel_Vivaro, Fiat_Ducato, Peugeot_Boxer, Citroën_Jumper, Fiat_Multijet_engine, Iveco_Daily, Toyota_ProAce, Scania_R-series, Volvo_FH, MAN_TGX, DAF_XF, Mercedes-Benz_Actros, Iveco_Stralis, Selective_catalytic_reduction, SAE_J1939, Solaris_Urbino, European_emission_standards, Honda_PCX, Yamaha_MT-07, BMW_R1250GS, Continuously_variable_transmission, John_Deere, ISOBUS, Nissan_Leaf, Volkswagen_ID.3, Hyundai_Kona, Hyundai_Ioniq_5, Kia_EV6, Kia_Niro, Renault_Zoe, BMW_i3, State_of_health.
