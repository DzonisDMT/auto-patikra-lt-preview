# STATS (v2.1, 2026-10-16)

Total **9533** unique generic codes. Per letter: P 7355, B 323, C 626, U 1229. lt_quality flagged: **0**.
Entry point: `index.json` (`codes` = code→file map, `files` = per-file counts, `extra_files` = prices_lt.json, brand_notes.json, `cost_basis_counts`). All files < 2 MB; JSON validated; no duplicate codes. Files are written atomically (temp + rename).

| File | Records | lt_quality flagged | Size |
|---|---|---|---|
| generic_B0.json | 323 | 0 | 226 KB |
| generic_C0.json | 626 | 0 | 461 KB |
| generic_P00.json | 255 | 0 | 167 KB |
| generic_P01.json | 256 | 0 | 183 KB |
| generic_P02.json | 256 | 0 | 146 KB |
| generic_P03.json | 253 | 0 | 169 KB |
| generic_P04.json | 256 | 0 | 173 KB |
| generic_P05.json | 256 | 0 | 177 KB |
| generic_P06.json | 256 | 0 | 160 KB |
| generic_P07.json | 256 | 0 | 147 KB |
| generic_P08.json | 234 | 0 | 171 KB |
| generic_P09.json | 147 | 0 | 117 KB |
| generic_P0A.json | 256 | 0 | 202 KB |
| generic_P0B.json | 256 | 0 | 211 KB |
| generic_P0C.json | 256 | 0 | 205 KB |
| generic_P0D.json | 256 | 0 | 202 KB |
| generic_P0E.json | 255 | 0 | 197 KB |
| generic_P0F.json | 1 | 0 | 0 KB |
| generic_P20.json | 256 | 0 | 172 KB |
| generic_P21.json | 256 | 0 | 184 KB |
| generic_P22.json | 256 | 0 | 198 KB |
| generic_P23.json | 256 | 0 | 182 KB |
| generic_P24.json | 256 | 0 | 202 KB |
| generic_P25.json | 256 | 0 | 198 KB |
| generic_P26.json | 256 | 0 | 198 KB |
| generic_P27.json | 242 | 0 | 186 KB |
| generic_P28.json | 247 | 0 | 177 KB |
| generic_P2A.json | 256 | 0 | 215 KB |
| generic_P2B.json | 256 | 0 | 213 KB |
| generic_P2C.json | 256 | 0 | 207 KB |
| generic_P2D.json | 254 | 0 | 200 KB |
| generic_P2E.json | 192 | 0 | 150 KB |
| generic_P34.json | 155 | 0 | 110 KB |
| generic_U0.json | 1055 | 0 | 813 KB |
| generic_U3.json | 174 | 0 | 132 KB |

## Method
- Coverage: OBDex (CC0), 9533 codes; `en` from OBDex. LT fields: v1 rules (overlap) / obd-build translator + rules.py (OBDex-only). All 244 previously flagged LT strings fixed by hand-written rules on 2026-10-16 → 0 flagged.
- severity is rule-based by code family + keywords, not model-specific.
- **Costs:** `cost_basis` names the repair key in prices_lt.json (real LT service price lists and .lt parts shops, checked 2026-10-16). 3615 records have `cost_basis: "ivertinimas"` = older rough family estimate (or null), not sourced. `diagnostika` (U communication codes) and `elektros_instaliacija` (circuit codes) cover only fault finding / wiring repair, not module or sensor replacement. Prices are mixed with/without VAT and often "from" prices – treat as rough ranges.
- prices_lt.json: 23 repairs, labour 40–95 €/h. Parts = aftermarket. Autoaibė update (2026-10-16): battery, fuel pump, EVAP parts and airbag clock spring added from Autoaibė search snippets; airbag modules themselves and EVAP/airbag labour still not found.

## Brand notes
brand_notes.json: 25 entries, 17 brands, facts from Wikipedia rewritten in own words; `confidence` low for Opel, Renault/Dacia, Volvo, Honda, Nissan, Hyundai U-series, Mazda, Mitsubishi, Fiat. Related codes restricted to generic codes present in this DB.

## Gaps
- No manufacturer-specific code files (P1, B1/B2, C1/C2, U1/U2): no reliable permissive open data for any of the 17 brands. None invented.
- P3 only P34xx; U3 174 codes.
- Recall databases and ADAC breakdown statistics not used directly (no open machine-readable licence checked).

## Cost basis counts (after Autoaibė update)
- ivertinimas: 3615
- elektros_instaliacija: 2442
- diagnostika: 547
- adblue_nox: 354
- common_rail: 343
- pavaru_adaptacija: 309
- turbina: 308
- lambda: 239
- generatorius: 213
- akumuliatorius: 184
- egr_valymas: 151
- oro_pagalves_juosta: 142
- kaitinimo_zvakes: 102
- abs_daviklis: 96
- katalizatorius: 82
- uzdegimo_rite: 80
- ecu_programa: 80
- dpf_valymas: 61
- evap: 57
- kuro_siurblys: 45
- starteris: 25
- grandine: 24
- maf: 24
- termostatas: 10


## Transporto tipų aprėptis (v2.3, 2026-10-16)
| Tipas | Kodai | Pastabos / kainos | Spragos |
|---|---|---|---|
| Lengvieji, visureigiai | 9533 generic | 21 pastaba (13 lengvųjų + 8 visureigių); kainos – pilnos | gamintojų kodų nėra |
| Furgonai / lengvieji komerciniai | 9533 generic (EOBD) | 8 furgonų pastabos | furgonams atskirų kainų nėra (taikomos lengvųjų) |
| Kemperiai | generic (furgonų važiuoklė) / J1939 (sunkūs) | Ducato/Daily pastabose | gyvenamosios dalies sistemų kodų ir kainų nėra |
| EV / hibridai | 1721 kodų su ev_hybrid_specific=true | 11 pastabų + SOH vadovas; 5 HV kainų raktai | P1A.. ir kiti gamintojų EV kodai nėra (neatviri); inverterio/OBC LT kainų nerasta |
| Sunkvežimiai | J1939: 32 FMI + 71 SPN | 1 bendra pastaba; darbo valanda 45–70 € | SPN sąrašas nepilnas (~71 iš tūkstančių), be SPN gedimų aprašymų; nesulyginta su SAE |
| Autobusai | J1939 (tie patys) | 1 bendra pastaba | autobusų kainų nerasta |
| Motociklai / motoroleriai / keturračiai | generic P (Euro 5, dalis) | 1 pastaba; diagnostika 30–60 € | gamintojų kodų nėra (nėra atvirų šaltinių) |
| Traktoriai / žemės ūkio | J1939 (tie patys) | 1 pastaba; 50 €/val. | ISOBUS kodų nėra |

- EV žymėjimas: P0A–P0E diapazonai + raktiniai žodžiai (high voltage, hybrid, drive motor, inverter, battery pack, charging port/stop, DC/DC); atmesta „Circuit High Voltage“, „charge air“, „power outlet“.
- EV kodų kaina: baterijos kodai → hv_moduliu_keitimas (100–1500 €); kiti EV kodai, buvę „ivertinimas“ → hibrido_baterijos_diagnostika (50–80 €, tik diagnostika).
- cost_basis po pakeitimų: ivertinimas 2842.
