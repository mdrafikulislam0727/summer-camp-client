import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useClassCard = () => {
    const { user } = useAuth();
    // const token =localStorage.getItem('token');
    const [axiosSecure]=useAxiosSecure()

    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart,refetch, isLoading]
}

export default useClassCard;