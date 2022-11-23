/*
CONSIGNA

Según el convenio de trabajodes informáticos.
https://unioninformatica.org/institucional/convenio-colectivo-de-trabajo/ (PÁGINA CAIDA)
(bajar pdf Escala Salarial)

Generar una clase llamada CEmpleado.

Mostrar el calculo - con sus constructores -

Para la siguientes personas:

Apellido y Nombre: Alvarado Lucas.
Categoria : B 11 - desarrollador web - Semi-Sr
antiguedad: 5 años
Idioma: Ingles
Hijos con guarderia: 2
Presentismo: si
cordinador grupo
Km por movilidad propia: 250


Apellido y Nombre: Artigas Juan Luis.
Categoria : B 10 - desarrollador Mobile - Junior
antiguedad: 2 años
Idioma: Ingles
Hijos con guarderia: 0
Presentismo: si
Km por movilidad propia: 100
Adicional objetivo: 7500$


Apellido y Nombre: Casas Kevin.
Categoria : B 2- Analista de Sistmas - Senior
antiguedad: 20 años
Idioma: Ingles
Hijos con guarderia: 1
Presentismo: si
Km por movilidad propia:350
Funcion : lider de equipo.

Empleado perteneciente al sindicato.




Calcular:
Sueldo Bruto= Sueldo básico + Antiguedad + IdiomaExtranjero + Titulo de Grado + Presentismo + Funcion (coordinar... etc)+ Adicionales * Objetivos + Adicionales Voluntarios.
Retenciones: Jubilacion (11% del Sueldo básico) + Obra social (3%Sueldo Básico) + Sindicato (1% del sueldo Básicoo)

Calcular:
Calcular Sueldo Neto =Sueldo Bruto - Retenciones
*/

//Creación clase Empleado
class Empleado{
    //Define constructor
    constructor(nombreC, categoria1, categoria2, categoria3, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, jubilacion, obraSocial, adicional){
        this.nombreC = nombreC;
        this.categoria1 = categoria1;
        this.categoria2 = categoria2;
        this.categoria3 = categoria3;
        this.antiguedad = antiguedad;
        this.idioma = idioma;
        this.hijosG = hijosG;
        this.presentismo = presentismo;
        this.km = km;
        this.funcion = funcion;
        this.sindicato = sindicato;
        this.jubilacion = jubilacion;
        this.obraSocial = obraSocial;
        this.adicional = adicional;
    }

    //Método calcular sueldo básico
    FunctionSueldoBasico(){
        let sueldoBasico = 0;
        if(this.categoria = 'B-2')
            if(this.categoria3 = 'Junior') sueldoBasico = 91181,57;
            else if(this.categoria3 = 'Semi-Senior') sueldoBasico =  99508,87;
            else if(this.categoria3 = 'Senior') sueldoBasico = 107836,17;
        else if(this.categoria = 'B-10')
            if(this.categoria3 = 'Junior') sueldoBasico = 86522,94;
            else if(this.categoria3 = 'Semi-Senior') sueldoBasico = 94384,37;
            else if(this.categoria3 = 'Senior') sueldoBasico =  102245,81;
        else if(this.categoria = 'B-11')
            if(this.categoria3 = 'Junior') sueldoBasico =  84892,41;
            else if(this.categoria3 = 'Semi-Senior') sueldoBasico = 92590,80;
            else if(this.categoria3 = 'Senior') sueldoBasico = 100289,19;

        return sueldoBasico;
    }

    //Método calcular sueldo bruto
    FunctionSueldoBruto(){
        let sIdioma = 0, sFuncion = 0, sPresentismo = 0, sTitulo = 0, sAdicionales = 0, sObjetivos = 0;

        let sBasico = this.FunctionSueldoBasico();
   
        let sAntiguedad = sBasico / 100 * this.antiguedad;

        if (this.idioma != 'Español') { sIdioma = sBasico/100*8; }
      
        if(this.presentismo = true) { sPresentismo = sBasico/100*2; }

        if(this.funcion = 'Coordinador Grupo') { sFuncion = sBasico/100*10; } 
        else if(this.funcion = 'Lider de Equipo') { sFuncion = sBasico/100*20; }

        let sBruto = sBasico + sAntiguedad + sIdioma + sTitulo + sPresentismo + sFuncion + sAdicionales * sObjetivos + this.adicional;
        
        return sBruto;
    }

    //Método calcular Retenciones
    FunctionRetenciones(){
        let retencionTotal=0;
        if(this.jubilacion==true)
            retencionTotal=retencionTotal + (this.FunctionSueldoBasico()/100*11);
        if(this.obraSocial==true)
            retencionTotal=retencionTotal + (this.FunctionSueldoBasico()/100*3);
        if(this.sindicato==true)
            retencionTotal=retencionTotal + (this.FunctionSueldoBasico()/100*1);
        return retencionTotal;
    }

    //Método Sueldo Neto
    FunctionSueldoNeto(){ 
        return this.FunctionSueldoBruto() - this.FunctionRetenciones();
    }
}

//Se define la clase Liquidación
class Liquidacion{
    constructor(sueldoBruto, Retenciones, SueldoNeto){
        this.sueldoBruto = sueldoBruto;
        this.Retenciones = Retenciones;
        this.SueldoNeto = SueldoNeto;
    }
}

//Se crean las instancias de la clase empleados
let Empleado1 = new Empleado('Alvarado Lucas', 'B-11', 'Desarrollador Web', 'Semi-Senior', 5, 'Ingles', 2, true, 250, 'Coordinador Grupo', false, false, false, 0);
let Empleado2 = new Empleado('Artigas Juan Luis', 'B-10', 'Desarrollador Mobile', 'Junior', 2, 'Ingles', 0, true, 100, undefined, false, false, false, 7500);
let Empleado3 = new Empleado('Kevin Casas', 'B-2', 'Analista en Sistemas', 'Senior', 20, 'Ingles', 1, true, 350, 'Lider de Equipo', true, false, false, 0);

//Se crean las instancias de la clase de Liquidación
let Liquidacion1 = new Liquidacion(Empleado1.FunctionSueldoBruto(), Empleado1.FunctionRetenciones(), Empleado1.FunctionSueldoNeto());
let Liquidacion2 = new Liquidacion(Empleado2.FunctionSueldoBruto(), Empleado2.FunctionRetenciones(), Empleado2.FunctionSueldoNeto());
let Liquidacion3 = new Liquidacion(Empleado3.FunctionSueldoBruto(), Empleado3.FunctionRetenciones(), Empleado3.FunctionSueldoNeto());


function Show(Empleado, Liquidacion){
    let EmpleadoS = Empleado;
    let LiquidacionS = Liquidacion;
    document.getElementById("tablaM").innerHTML =
    document.getElementById("tablaM").innerHTML +
    ' <tr> <td><label>' + EmpleadoS.nombreC +
    '</label></td> <td><label> ' + EmpleadoS.categoria1 +
    '</label></td> <td><label> ' + EmpleadoS.categoria2 + 
    '</label></td> <td><label> ' + EmpleadoS.categoria3 +
    '</label></td> <td><label> ' + EmpleadoS.antiguedad +
    '</label></td> <td><label> ' + EmpleadoS.idioma +
    '</label></td> <td><label> ' + EmpleadoS.hijosG +
    '</label></td> <td><label> ' + EmpleadoS.presentismo +
    '</label></td> <td><label> ' + EmpleadoS.km + 'KM' +
    '</label></td> <td><label> ' + EmpleadoS.funcion +
    '</label></td> <td><label> ' + EmpleadoS.sindicato +
    '</label></td> <td><label> ' + EmpleadoS.jubilacion +
    '</label></td> <td><label> ' + EmpleadoS.obraSocial +
    '</label></td> <td><label> ' + EmpleadoS.adicional +
    '</label></td> <td><label> ' + LiquidacionS.SueldoNeto +
    '</label></td> </tr> ' 
}