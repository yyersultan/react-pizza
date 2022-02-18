import { Pie,measureTextWidth } from "@ant-design/charts"
import { FC, memo } from "react";
import { Pizzas } from "../../store/reducers/types";
import { countCategory, IPieDataCategory } from "../../utils/countCategory";

interface PieChartProps {
    pizzas : Pizzas[]
}

export const PieChart:FC<PieChartProps> = memo(({pizzas}) => {
    const data:IPieDataCategory[] = countCategory(pizzas.map(p => p.category));

    function renderStatistic(containerWidth:number,text:string,style:any):string{
        const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
        const R:number = containerWidth / 2; 
        let scale:number = 1;

        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }

        const textStyleStr:string = `width:${containerWidth}px;`;
        return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }
    
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: (v:number) => `${v}`,
          },
        },
        label: {
          type: 'inner',
          offset: '-50%',
          style: {
            textAlign: 'center',
          },
          autoRotate: false,
          content: '{value}',
        },
        statistic: {
          title: {
            offsetY: -4,
            customHtml: (container:any, view:any, datum:any) => {
              const { width, height } = container.getBoundingClientRect();
              const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
              const text = datum ? datum.type : 'Pizza';
              return renderStatistic(d, text, {
                fontSize: 28,
              });
            },
          },
          content: {
            offsetY: 4,
            style: {
              fontSize: '32px',
            },
            customHtml: (container:any, view:any, datum:any, data:any) => {
              const { width } = container.getBoundingClientRect();
              const text = datum ? ` ${datum.value}` : ` ${data.reduce((r:any, d:any) => r + d.value, 0)}`;
              return renderStatistic(width, text, {
                fontSize: 32,
              });
            },
          },
        },
       
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
          {
            type: 'pie-statistic-active',
          },
        ],
      };
    return <Pie {...config}/>
})