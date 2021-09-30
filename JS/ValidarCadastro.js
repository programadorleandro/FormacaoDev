    //método para exibir o resumo do cadastro
    function Output(msgs)
    {   
            r=document.getElementById("display");
            r.innerHTML=msgs;
        }

        //array de mensagens de erros
        var arrayError=[];
        var genero="";
        
    var lblErros=['nome precisa ter acima de 6 caracteres', 'CPF precisa ter 11 dígitos', 'verifique se seu RG foi inserido corretamente', 'é preciso informar seu gênero', 'cep precisa conter 8 dígitos', 'rua / avenida deverá ser preenchido', 'número deverá ser preenchido', 'bairro deverá ser informado', 'cidade deverá ser informada', 'informe o estado corretamente', 'código de área da sua região deverá ser preenchido', 'telefone residencial deverá conter 8 dígitos', 'verifique se inseriu o código de área da sua região corretamente', 'verifique se inseriu os dados do seu celular corretamente', 'é preciso selecionar um curso'];
    var lblOri=['Nome completo', 'CPF', 'RG', 'Sexo', 'Cep', 'Rua/Avenida', 'Número', 'Bairro', 'Cidade', 'Selecione seu estado', 'Código de área', 'Telefone residencial para contato', 'Código de área da região onde você mora', 'Celular', 'Selecione um curso'];
    
    
    
    function Erros(lblCampo, msgErro)
    {
        lblCampo.innerHTML='<span role="alert" class="erros">Erro: '+msgErro+'</span>';
    }
    
function CorrigirErros(lblCampo, msgPadrao)
    {
        lblCampo.innerHTML='<span class="lblPadrao">* '+msgPadrao+'</span>';
    }
    
    
    
    function CadastrarAluno()
    {
        //pegar todos os campos e as labels dos mesmos.
        var labelNome=document.getElementById("lblNome");
            var nome = document.getElementById("nome").value;
    var labelCpf=document.getElementById("lblCpf");
    var CPF=document.getElementById("cpf").value;
    var labelRg=document.getElementById("lblRg");
    var RG=document.getElementById("rg").value;
    var LabelSexo=document.getElementById("lblSexo");
    var dddFixo=document.getElementById("dddFixo").value;
    
var sexo=document.getElementsByName("sexo");
    var labelCep=document.getElementById("lblCep");
    var Cep=document.getElementById("cep").value;
    var labelRua=document.getElementById("lblRua");
    var Rua=document.getElementById("rua").value;
    var labelNumero=document.getElementById("lblNumero");
    var Numero=document.getElementById("numero").value;
    var labelComplemento=document.getElementById("lblComplemento");
    var Complemento=document.getElementById("complemento").value;
    var labelBairro=document.getElementById("lblBairro");
    var Bairro=document.getElementById("bairro").value;
    var labelCidade=document.getElementById("lblCidade");
    var Cidade=document.getElementById("cidade").value;
    var labelEstado=document.getElementById("lblEstado");
    var Estado=document.getElementById("estado");
    var labelDddFixo=document.getElementById("lbldddFixo");
var dddFixo=document.getElementById("dddFixo").value;
    var labelTelFixo=document.getElementById("lblTelFixo");
    var TelFixo=document.getElementById("telFixo").value;
    var labeldddMovel=document.getElementById("lbldddMovel");
    var DddMovel=document.getElementById("dddMovel").value;
    var labelCel=document.getElementById("lblCel");
    var Cel=document.getElementById("cel").value;
    var labelCurso=document.getElementById("lblCurso");
    var Curso=document.getElementById("cursos");
    
        if(nome.length<=6)
        {
            Erros(labelNome, lblErros[0]);
    arrayError.push(lblErros[0]);        
    
        }
            else
            {
                CorrigirErros(labelNome, lblOri[0]);
                buscaIndce=arrayError.indexOf(lblErros[0]);
                if(buscaIndce!=-1)
                {
                    arrayError.splice(buscaIndce);
                }
            }
    if(CPF.length<11)
    {
        
        Erros(labelCpf, lblErros[1]);
    arrayError.push(lblErros[1]);
    }
    else
    {
        CorrigirErros(labelCpf, lblOri[1]);
    buscaIndce    =arrayError.indexOf(lblErros[1]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    }
    
    if(RG.length>0 && RG.length<9)
    {
        
        Erros(labelRg, lblErros[2]);
        arrayError.push(lblErros[2]);
    }
    else
    {
        CorrigirErros(labelRg, lblOri[2]);
    buscaIndce=arrayError.indexOf(lblErros[2]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    }
    
    if(sexo[0].checked!=true && sexo[1].checked!=true)
    {
        
        Erros(LabelSexo, lblErros[3]);
    arrayError.push(lblErros[3]);
    }
    else
    {
    
        CorrigirErros(LabelSexo, lblOri[3]);
        
        buscaIndce=arrayError.indexOf(lblErros[3]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    }
    
    if(Cep.length<8)
    {
        arrayError.push(lblErros[4]);
        Erros(labelCep, lblErros[4]);
    }
    else
    {
        CorrigirErros(labelCep, lblOri[4]);
        buscaIndce=arrayError.indexOf(lblErros[4]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    
    }
    
    if(Rua=="")
    {
        arrayError.push(lblErros[5]);
        Erros(labelRua, lblErros[5]);
    }
    else
    {
        CorrigirErros(labelRua, lblOri[5]);
        buscaIndce=arrayError.indexOf(lblErros[5]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    }
    
    if(Numero=="")
    {
        Erros(labelNumero, lblErros[6]);
        arrayError.push(lblErros[6]);
    }
    else
    {
        CorrigirErros(labelNumero, lblOri[6]);
        buscaIndce=arrayError.indexOf(lblErros[6]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    }
    
    if(Bairro=="")
    {
        Erros(labelBairro, lblErros[7]);
        arrayError.push(lblErros[7]);
    }
    else
    {
        CorrigirErros(labelBairro, lblOri[7]);
        buscaIndce=arrayError.indexOf(lblErros[7]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    }
    
    if(Cidade=="")
    {
        Erros(labelCidade, lblErros[8]);
        arrayError.push(lblErros[8]);
    }
    else
    {
        CorrigirErros(labelCidade, lblOri[8]);
        buscaIndce=arrayError.indexOf(lblErros[8]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    }
    if(Estado.options[Estado.selectedIndex].value=="")
    {
        Erros(labelEstado, lblErros[9]);
        arrayError.push(lblErros[9]);
    }
    else
    
    {
    CorrigirErros(labelEstado, lblOri[9]);
    buscaIndce=arrayError.indexOf(lblErros[9]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    
    
    }
    
    if(DddMovel.length<2)
    {
        Erros(labeldddMovel, lblErros[10]);
        arrayError.push(lblErros[10]);
    }
    else
    {
        CorrigirErros(labeldddMovel, lblOri[10]);
        buscaIndce=arrayError.indexOf(lblErros[10]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    
    
    }
    
    if(TelFixo.length<8)
    {
        Erros(labelTelFixo, lblErros[11]);
        arrayError.push(lblErros[11]);
    }
    else
    {
        CorrigirErros(labelTelFixo, lblOri[11]);
        buscaIndce=arrayError.indexOf(lblErros[12]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    
    }
    
    if(dddFixo.length<2)
    {
        Erros(labeldddMovel, lblErros[12]);
        arrayError.push(lblErros[12]);
    }
    else
    {
    CorrigirErros(labeldddMovel, lblOri[12]);
    buscaIndce=arrayError.indexOf(lblErros[12]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    }
    
    if(Cel.length<9 )
    {
        Erros(labelCel, lblErros[13]);
        arrayError.push([13]);
    }
    else
    {
        CorrigirErros(labelCel, lblOri[13]);
        buscaIndce=arrayError.indexOf(lblErros[13]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    }
    
    if(Curso.options[Curso.selectedIndex].value=="")
    {
        Erros(labelCurso, lblErros[14]);
        arrayError.push(lblErros[14]);
    }
    else
    {
    CorrigirErros(labelCurso, lblOri[14]);
    buscaIndce=arrayError.indexOf(lblErros[14]);
    if(buscaIndce!=-1)
    {
        arrayError.splice(buscaIndce);
    }
    
    
    
    }
    
    statusRg="";
    if(RG.length=0)
    {
        statusRg="não informado";
    }
    else
    {
        statusRg=RG;
    }
    
    //recebendo Genero do usuario
if(sexo[0].checked==true)
{
    genero="feminino";
}
    else
     {
         genero="masculino";
     }
    
     if(arrayError.length==0)
    {
        
        alert("Obrigado "+nome+", sua inscrição foi realizada com sucesso!");
        
        
    msgOutput="<h2>Resumo do seu cadastro</h2><p>Nome do aluno: "+nome+".<br>Cpf: "+CPF+".<br>RG: "+statusRg+".<br>Sexo: "+genero+".<br>Endereço:  "+Rua+" "+Numero+", "+Complemento+" "+ Bairro+" "+Cidade+" "+Estado.options[Estado.selectedIndex].value+". - Cep: "+Cep+".<br>Telefone: ("+DddMovel+") "+TelFixo+".<br>Celular: ("+DddMovel+") "+Cel+".<br>Curso escolhido: "+Curso.options[Curso.selectedIndex].value+".</p>";
    Output(msgOutput);
    }
    else
    {
        document.getElementById("display").innerHTML="";
    }
        }
    