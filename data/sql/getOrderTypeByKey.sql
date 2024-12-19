select 
tot.IdTipoOrdenTrabajo as 'id',
tot.totAbreviacion as 'key',
tot.totDescripcion as 'description'
from Autocentro..TtipOrdenTrabajo tot
where tot.totAbreviacion = @key