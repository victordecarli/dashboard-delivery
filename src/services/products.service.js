import { supabase } from '@/lib/supabase';

export const productsService = {
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return { data: null, error };
    }
  },

  async getActive() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('name', { ascending: true });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao buscar produtos ativos:', error);
      return { data: null, error };
    }
  },

  async getById(id) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      return { data: null, error };
    }
  },

  async create(productData) {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            is_active: productData.is_active !== undefined ? productData.is_active : true,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      return { data: null, error };
    }
  },

  async update(id, productData) {
    try {
      const updateData = {};
      if (productData.name !== undefined) updateData.name = productData.name;
      if (productData.description !== undefined) updateData.description = productData.description;
      if (productData.price !== undefined) updateData.price = productData.price;
      if (productData.is_active !== undefined) updateData.is_active = productData.is_active;

      const { data, error } = await supabase
        .from('products')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      return { data: null, error };
    }
  },

  async delete(id) {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { data: true, error: null };
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      return { data: null, error };
    }
  },

  async toggleActive(id) {
    try {
      const { data: product, error: fetchError } = await supabase
        .from('products')
        .select('is_active')
        .eq('id', id)
        .single();

      if (fetchError) throw fetchError;

      const { data, error } = await supabase
        .from('products')
        .update({ is_active: !product.is_active })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao alternar status do produto:', error);
      return { data: null, error };
    }
  },
};
