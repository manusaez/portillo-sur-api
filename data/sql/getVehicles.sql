select 
v.VehChasis as 'vin',
ma.MarNombre as 'brand',
mo.ModNombre as 'model',
v.VehAño as 'year',
v.IdPatente as 'licensePlate',
v.VehKilometros as 'kilometers',
v.RutCliente as 'idClient',
cli.CardName as 'firstName',
cli.Phone1 as 'mobile',
cli.Cellular as 'mainPhone',
cli.E_mail as 'email'
from Autocentro..MaeVehiculos as v
join Autocentro..TtipMarcas as ma on v.IdTipoMarca = ma.IdTipoMarca 
left join Autocentro..TtipModelos as mo on v.IdTipoMarca = mo.IdTipoMarca and v.IdTipoModelo = mo.IdTipoModelo 
left join SBO_CD1..OCRD as cli on v.RutCliente collate SQL_Latin1_General_CP850_CI_AS = cli.LicTradNum
where v.IdPatente LIKE '%'+@licensePlate+'%'
and v.VehChasis LIKE '%'+@vin+'%'
and ma.MarNombre LIKE '%'+@brand+'%'
and mo.ModNombre LIKE '%'+@model+'%'
and v.VehAño LIKE '%'+@year+'%'
and cli.CardName LIKE '%'+@firstName+'%'
and cli.CardType='C'
and UPPER(ma.MarNombre) in ('HYUNDAI', 'BAIC', 'JIM', 'JWM', 'SHINERAY', 'SWM', 'MAHINDRA')