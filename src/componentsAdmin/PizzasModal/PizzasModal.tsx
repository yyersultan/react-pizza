import { Checkbox, Input, Modal, Select } from "antd";
import { FC, memo, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pizzas } from "../../store/reducers/types";
import { categories, pizza_sizes, types_list } from "../../utils/contants";
import styles from "./PizzasModal.module.css";

interface PizzasModalProps {
  pizzas: Pizzas | null;
  modal: boolean;
  setModal: (moda: boolean) => void;
}

export const PizzasModal: FC<PizzasModalProps> = memo(
  ({ pizzas, modal, setModal }) => {

    const { control, handleSubmit,reset } = useForm({ defaultValues: { ...pizzas } });

    const onSubmit = (data: any) => {
        console.log(data);
        
    };
    useEffect(() => {
        reset( { ...pizzas})
    },[pizzas])
    
    
    return (
      <Modal visible={modal} onCancel={() => setModal(false)}>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          {/* NAME */}
          <div className={styles.FormItem}>
            <label>Name</label>
            <Controller
              name="name"
              defaultValue={pizzas?.name}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
          </div>
          {/* IAMGE URL */}
          <div className={styles.FormItem}>
            <label>Iamge url</label>
            <Controller
              name="imageUrl"
              defaultValue={pizzas?.imageUrl}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
          </div>
          {/* PRICE */}
          <div className={styles.FormItem}>
            <label>Price</label>
            <Controller
              name="price"
              defaultValue={pizzas?.price}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
          </div>
          {/* TYPES */}
          <div className={styles.FormItem}>
            <h3>Types</h3>
            <Controller
              name="types"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  {types_list.map((t, i) => (
                    <Checkbox
                      {...field}
                    >
                      {t}
                    </Checkbox>
                  ))}
                </div>
              )}
            />
          </div>
          {/* SIZES */}
          <div className={styles.FormItem}>
              <h3>Sizes</h3>
            <Controller
              name="sizes"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  {pizza_sizes.map((size, i) => (
                    <Checkbox
                      {...field}
                    >
                      {size} cm
                    </Checkbox>
                  ))}
                </div>
              )}
            />
          </div>
          {/* Category */}
          <div className={styles.FormItem}>
              <Controller 
              name="category"
              control={control}
              render = {({field}) => (
                  <Select defaultValue={categories[0]}>
                      {categories.map((cat,i) => (
                          <Select.Option  >{cat}</Select.Option>
                      ))}
                  </Select>
              )}
              />
          </div>
          <input value={"Submit"} type="submit" />
        </form>
      </Modal>
    );
  }
);
